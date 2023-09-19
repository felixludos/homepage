const contentEl = document.getElementById('content');

const fadeInElements = document.querySelectorAll('.fade-in');

document.addEventListener('DOMContentLoaded', function() {
    fadeInElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('active');
        }
    });

    function initializeSite(data) {
        // Store the data in a global variable or pass to another function
        window.siteStructure = data;

        // Load the correct page based on the URL's fragment
        const initialPage = window.location.hash.slice(1) || 'home';
        loadPage(initialPage);

        // Listen for hash changes to update the content
        window.addEventListener('hashchange', function() {
            const page = window.location.hash.slice(1);
            loadPage(page);
        });

    }

    fetch('content/_toc.yaml')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(yamlText => {
            // Parse the YAML content
            const data = jsyaml.load(yamlText);
            
            // Call the initialization function
            initializeSite(data);
        })
        .catch(error => {
            console.log('There was a problem with the fetch operation:', error.message);
        });
});

function loadPage(page) {
    console.log(`Loading page: ${page}`);

    contentEl.innerHTML = ''; // Clear the content area
    
    if (page.includes('-')) {
        // If there's a hyphen, then it's a combination of gallery and project title
        const [gallery, projectTitle] = page.split('-');
        loadProjectPage(gallery, projectTitle);
    } else if (window.siteStructure && page in window.siteStructure) {
        const page_type = window.siteStructure[page].type;
        switch (page_type) {
            case 'gallery':
                loadGallery(page);
                break;
            default:
                console.log(`Unknown page type: ${page_type}`);
        }
    } else {
        console.log(`defaulting to home page: ${page}`);

        // load (default) home page
        contentEl.innerHTML = '<h2>Default Home</h2>';
    }
}

function loadGallery(gallery) {
    // Access the list of posts from the loaded site structure
    console.log(`Loading gallery: ${gallery}`);

    const info = window.siteStructure[gallery];

    // If info doesn't exist for the gallery, handle the error
    if (!info || !info.posts || info.posts.length === 0) {
        console.error(`No posts data found for gallery: ${gallery}`);
        contentEl.innerHTML = '<h2>No posts found.</h2>';  // display the message in the content area
        return;
    }

    const promises = Object.keys(info.posts).map(key => {
        return fetchProjectContent(gallery, key)
            .then(content => {
                addProjectToGallery(gallery, key, content);
            });
    });

    // Wait for all projects to be loaded
    Promise.all(promises).then(() => {
        bindViewMoreLinks();
    });
}

function bindViewMoreLinks() {
    // Adding the event listener for 'View More' links
    contentEl.querySelectorAll('.project-card .view-more').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const gallery = e.target.dataset.gallery;
            const entry = e.target.dataset.entry;
            
            // Change the hash of the site, triggering the hashchange event
            window.location.hash = `${gallery}-${entry}`;
        });
    });
}

function loadProjectPage(gallery, entry) {
    // const info = window.siteStructure[gallery].posts[entry];
    fetchProjectContent(gallery, entry)
        .then(content => {
            const frontMatter = extractFrontMatter(content);
            let markdownContent = removeFrontMatter(content);

            if (markdownContent) {
                // If the markdown file has content, render it
                contentEl.innerHTML = marked(markdownContent);
            } else if (frontMatter.repo) {
                // If there's an associated GitHub repo, fetch the README
                const [username, repoName] = frontMatter.repo.split('/');
                fetchGitHubReadme(username, repoName)
                    .then(readme => {
                        contentEl.innerHTML = marked(readme);
                    });
            } else {
                // If there's no repo or markdown content, display the front matter
                let formattedFrontMatter = "<div class='front-matter'>";
                for (let key in frontMatter) {
                    formattedFrontMatter += `<p><strong>${key}:</strong> ${frontMatter[key]}</p>`;
                }
                formattedFrontMatter += "</div>";
                contentEl.innerHTML = formattedFrontMatter;
            }
        });
}

function fetchProjectContent(gallery, key) {
    const info = window.siteStructure[gallery].posts[key];
    const fileNameBase = info.filename || key;
    const fileExtension = info.ext || '.md';
    const filePath = `content/${gallery}/${fileNameBase}${fileExtension}`;

    return fetch(filePath).then(response => response.text());
}

function fetchGitHubReadme(username, repoName) {
    const apiUrl = `https://api.github.com/repos/${username}/${repoName}/readme`;
    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            return atob(data.content); // Decode base64 content
        });
}

function addProjectToGallery(gallery, entry, content) {
    const frontMatter = extractFrontMatter(content);
    const projectHtml = `
        <div class="project-card">
            <h3>${frontMatter.title}</h3>
            <p>Author: ${frontMatter.author}</p>
            <p>Date: ${frontMatter.date}</p>
            <!-- Add a 'View More' link to navigate to detailed content -->
            <a href="#" class="view-more" data-gallery="${gallery}" data-entry="${entry}">View More</a>
        </div>
    `;
    contentEl.innerHTML += projectHtml;
}

function extractFrontMatter(markdown) {
    const frontMatterPattern = /---\s*([\s\S]*?)\s*---/;
    const match = markdown.match(frontMatterPattern);

    if (!match) {
        return null; // No front matter found
    }

    const frontMatterText = match[1];
    const lines = frontMatterText.split('\n').filter(Boolean);
    const result = {};

    lines.forEach(line => {
        const [key, ...rest] = line.split(':');
        const value = rest.join(':').trim().replace(/["']/g, '');  // remove quotes
        result[key.trim()] = value;
    });

    return result;
}

function removeFrontMatter(markdown) {
    // The regular expression to match the front matter
    const frontMatterRegex = /^---[\s\S]*?---\n*/;

    // Remove the matched front matter
    return markdown.replace(frontMatterRegex, "");
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', () => {
    fadeInElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('active');
        }
    });
});
