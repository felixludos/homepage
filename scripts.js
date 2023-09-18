
const contentEl = document.getElementById('content');
// const grayMatter = window.grayMatter || matter;

document.addEventListener('DOMContentLoaded', function() {
    // No need to preventDefault anymore since we're using URI fragments
    document.querySelectorAll('nav a, header h1 a').forEach(link => {
        link.addEventListener('click', function(e) {
            loadPage(e.target.dataset.page);
        });
    });

    // Load the correct page based on the URL's fragment
    const initialPage = window.location.hash.slice(1) || 'home';
    loadPage(initialPage);

    // Listen for hash changes to update the content
    window.addEventListener('hashchange', function() {
        const page = window.location.hash.slice(1);
        // loadPage(page);
    });
});

function loadPage(page) {
    console.log(`Loading page: ${page}`);
    // const [gallery, projectTitle] = page.split('-');
    switch(page) {
        case 'home':
        case '':
            contentEl.innerHTML = '<h2>Home</h2>';
            break;
        // case gallery:
        //     loadProjectPage(gallery, projectTitle);
        //     break;
        default:
            contentEl.innerHTML = `<h2>${page}</h2>`;
            loadGallery(page);
    }
}

function loadGallery(gallery) {
    // Fetch the list of markdown files from projects.json
    console.log(`Loading gallery: ${gallery}`);
    fetch(`${gallery}/_info.json`)
        .then(response => response.json())
        .then(cards => {
            const promises = cards.map(entry => {
                return fetch(`${gallery}/${entry}`)
                    .then(response => response.text())
                    .then(content => {
                        addProjectToGallery(gallery, entry, content);
                    });
            });
            
            // Wait for all projects to be loaded
            Promise.all(promises).then(() => {
                bindViewMoreLinks();
            });
        });
}

function bindViewMoreLinks() {
    // Adding the event listener for 'View More' links
    contentEl.querySelectorAll('.project-card .view-more').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            loadProjectPage(e.target.dataset.gallery, e.target.dataset.entry);
        });
    });
}

function loadProjectPage(gallery, entry) {
    fetch(`${gallery}/${entry}`)
        .then(response => response.text())
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


