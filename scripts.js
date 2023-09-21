const contentEl = document.getElementById('content');

const fadeInElements = document.querySelectorAll('.fade-in');

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const gallery = e.target.dataset.gallery;
        const entry = e.target.dataset.entry;

        console.log(`Loading project: ${gallery}-${entry}`)

        // Change the hash of the site, triggering the hashchange event
        window.location.hash = `${gallery}-${entry}`;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    fadeInElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('active');
        }
    });

    let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", storedTheme);
    
    // Update the toggle function to store preference
    document.getElementById("darkModeToggle").addEventListener("click", function() {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let newTheme = currentTheme === "dark" ? "light" : "dark";
        console.log(`Switching theme from ${currentTheme} to ${newTheme}`)
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem('theme', newTheme);
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
            case 'simple':
                loadSimplePage(page);
                break;
            default:
                console.log(`Unknown page type: ${page_type}`);
        }
    } else {
        loadHomePage();
    }
}

function loadHomePage() {
    console.log(`defaulting to home page`);

    const info = window.siteStructure.home || {};
    const coverimage = info.cover ? info.cover : 'assets/ideal_city.jpg';
    document.getElementById('project-header').style.backgroundImage = `url('${coverimage}')`;

    // Fetch the greetings and sample a single random greeting
    fetch('greetings.json')
        .then(response => response.json())
        .then(greetings => {
            if (!greetings || !Array.isArray(greetings) || greetings.length === 0) {
                console.error("Invalid greetings data");
                return;
            }

            const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

            // Load the home page markdown content and replace the pattern
            loadSimplePageWithGreeting('home', randomGreeting); // Assuming 'home' is the name of the home page in your site structure
        })
        .catch(error => console.error('Error fetching greetings:', error));
}

function loadSimplePageWithGreeting(page, greeting) {
    const info = window.siteStructure[page] || {};
    const fileNameBase = info.filename || page;
    const fileExtension = info.ext || '.md';
    const filePath = `content/${fileNameBase}${fileExtension}`;

    fetch(filePath)
        .then(response => response.text())
        .then(content => {
            content = content.replace(/\{greeting\}/g, greeting); // Replace the {greeting} pattern
            contentEl.innerHTML = marked(content);
        });
}

function loadSimplePage(page) {
    const info = window.siteStructure[page] || {};
    const fileNameBase = info.filename || page;
    const fileExtension = info.ext || '.md';
    const filePath = `content/${fileNameBase}${fileExtension}`;

    const coverimage = info.cover ? info.cover : 'assets/ideal_city.jpg';
    document.getElementById('project-header').style.backgroundImage = `url('${coverimage}')`;

    fetch(filePath)
        .then(response => response.text())
        .then(content => {
            contentEl.innerHTML = marked(content);
        });
}

function loadGallery(gallery) {
    // Access the list of posts from the loaded site structure
    console.log(`Loading gallery: ${gallery}`);

    const info = window.siteStructure[gallery];

    const coverimage = info.cover ? info.cover : 'assets/ideal_city.jpg';
    document.getElementById('project-header').style.backgroundImage = `url('${coverimage}')`;

    // If info doesn't exist for the gallery, handle the error
    if (!info || !info.posts || info.posts.length === 0) {
        console.error(`No posts data found for gallery: ${gallery}`);
        contentEl.innerHTML = '<h2>No posts found.</h2>';  // display the message in the content area
        return;
    }

    loadSimplePage(gallery)

    // Sort keys by date
    const sortedKeys = Object.keys(info.posts).sort((a, b) => {
        const entryA = info.posts[a];
        const entryB = info.posts[b];
        if (!entryA.order || !entryB.order) {
            return a.localeCompare(b);
        }
        return entryA.order - entryB.order; // Sort in ascending order
        // if (!entryA.date || !entryB.date) {
        //     return a.localeCompare(b);
        // }
        // const dateA = new Date(entryA.date);
        // const dateB = new Date(entryB.date);
        // return dateB - dateA; // Sort in descending order
    });
    
    const promises = sortedKeys.map(key => {
        return fetchProjectContent(gallery, key)
        .then(content => {
            addProjectToGallery(gallery, key, content);
        });
    });
    // const promises = Object.keys(info.posts).map(key => {
    //     return fetchProjectContent(gallery, key)
    //         .then(content => {
    //             addProjectToGallery(gallery, key, content);
    //         });
    // });
}

function loadProjectPage(gallery, entry) {
    // const info = window.siteStructure[gallery].posts[entry];
    fetchProjectContent(gallery, entry)
        .then(content => {
            const info = window.siteStructure[gallery].posts[entry];
            const frontMatter = extractFrontMatter(content);
            Object.assign(info, frontMatter);
            const markdownContent = removeFrontMatter(content);
            
            const coverimage = info.cover ? info.cover : 'assets/ideal_city.jpg';
            document.getElementById('project-header').style.backgroundImage = `url('${coverimage}')`;

            const emoji = info.emoji ? `<span class="project-page-emoji">${info.emoji}</span>` : '';
            let fmtdate = '';
            if (info.date) {
                const dateObj = new Date(info.date);
                if (dateObj.toString() === "Invalid Date") {
                    fmtdate = info.date;
                } else {
                    fmtdate = dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
                }
            } else if (info.raw_date) {
                fmtdate = info.raw_date;
            }
            const date = fmtdate ? `<p class="project-page-date">${fmtdate}</span>` : '';
            if (!info.updated) {
                getLastEditDate(`content/${gallery}/${entry}.md`)
                    .then(updated => (new Date(updated)).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }))
                    .then(updated => {
                        info.updated = updated;
                        const updateddate = info.updated ? `<span class="project-page-date">(Last Edited: ${updated})</span>` : '';
                        document.getElementById('project-page-dates').innerHTML = `${date}${updateddate}`;
                    });
            }
            const updateddate = info.updated ? `<span class="project-page-date">(Last Edited: ${info.updated})</span>` : '';
        
            let links = `<a href="#${gallery}-${entry}" class="share-link" id="shareLink" data-link="https://felixludos.com/#${gallery}-${entry}">
            <i class="fas fa-share-alt"></i></a>`;
            if (info.repo) {
                links += `<a href="https://github.com/${info.repo}" target="_blank" class="project-page-icon">
                <i class="fab fa-github"></i></a>`;
            }
            if (info.arxiv) {
                links += `<a href="https://arxiv.org/abs/${info.arxiv}" target="_blank" class="project-page-icon">
                <i class="fas fa-book-open"></i></a>`;
            } // <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3.842 0a1.004 1.004 0 0 0-.922.608c-.153.369-.044.627.294 1.111l6.919 8.36l-1.023 1.106a1.04 1.04 0 0 0 .003 1.423l1.23 1.313l-5.44 6.444c-.28.3-.453.823-.297 1.199a1.025 1.025 0 0 0 .959.635a.913.913 0 0 0 .689-.34l5.783-6.126l7.49 8.005a.853.853 0 0 0 .684.26a.958.958 0 0 0 .877-.615c.158-.377-.017-.75-.306-1.14L13.73 13.9l1.064-1.13a.963.963 0 0 0 .009-1.317L4.633.465S4.26.01 3.867 0zm0 .272h.017c.218.005.487.272.564.364l.005.006l.005.005l10.17 10.99a.692.692 0 0 1-.008.946l-1.066 1.133l-1.498-1.772l-8.6-10.39c-.328-.472-.352-.619-.26-.841a.73.73 0 0 1 .671-.44Zm14.341 1.57a.877.877 0 0 0-.655.242l-5.696 6.158l1.694 1.832l5.309-6.514c.325-.433.479-.66.325-1.029a1.12 1.12 0 0 0-.977-.689zm-7.655 12.282l1.318 1.414l-5.786 6.13a.65.65 0 0 1-.496.26a.752.752 0 0 1-.706-.467c-.112-.269.036-.687.244-.909l.005-.005l.005-.006z"/></svg>
            const projectHtml = `
            <div class="project-page-header">
                <div class="project-page-title">
                    ${emoji}
                    <h1 class="project-page-title-text">${info.title}</h1>
                </div>
                <div class="project-page-links">
                    <div>
                        ${links}
                    </div>
                    <div id="project-page-dates">
                        ${date}
                        ${updateddate}
                    </div>
                </div>
            </div>
            `;
            contentEl.innerHTML += projectHtml;

            if (markdownContent) {
                // If the markdown file has content, render it
                contentEl.innerHTML += marked(markdownContent);
            // } else if (info.repo) {
            //     // If there's an associated GitHub repo, fetch the README
            //     const [username, repoName] = info.repo.split('/');
            //     fetchGitHubReadme(username, repoName)
            //         .then(readme => {
            //             contentEl.innerHTML = marked(readme);
            //         });
            } else {
                // If there's no repo or markdown content, display the front matter
                // let formattedFrontMatter = "<div class='front-matter'>";
                // for (let key in info) {
                //     formattedFrontMatter += `<p><strong>${key}:</strong> ${info[key]}</p>`;
                // }
                // formattedFrontMatter += "</div>";
                // contentEl.innerHTML = formattedFrontMatter;
                contentEl.innerHTML += `<p>Sorry, no content found for this project.</p>`;
            }
        
            const shareLinkElements = document.querySelectorAll('.share-link#shareLink');
            shareLinkElements.forEach(function(shareLinkElement) {
                shareLinkElement.addEventListener('click', function(event) {
                    event.preventDefault(); // Prevents the default anchor behavior
                    const projectLink = this.getAttribute('data-link');
        
                    // Use the Clipboard API to write the link to the clipboard
                    navigator.clipboard.writeText(projectLink).then(function() {
                        // console.log('Link copied to clipboard successfully!');
                        showNotification();
                    }).catch(function(err) {
                        console.error('Failed to copy link: ', err);
                    });
                });
            });
        });
}

function fetchProjectContent(gallery, entry) {
    const info = window.siteStructure[gallery].posts[entry];
    const fileNameBase = info.filename || entry;
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
    const info = window.siteStructure[gallery].posts[entry];
    const frontMatter = extractFrontMatter(content);
    Object.assign(info, frontMatter);

    // const arxiv = `assets/arxiv.svg`;

    const coverImage = info.cover ? `<div class="card-cover" style="background-image: url('${info.cover}');"></div>` : '';
    const emoji = info.emoji ? `<span>${info.emoji}</span>` : '';

    const description = info.description ? `<p class="card-description">${info.description}</p>` : '';
    // const date = info.date ? `<span class="card-date">${info.date}</span>` : '';

    let fmtdate = '';
    if (info.date) {
        const dateObj = new Date(info.date);
        if (dateObj.toString() === "Invalid Date") {
            fmtdate = info.date;
        } else {
            fmtdate = dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
        }
    } else if (info.raw_date) {
        fmtdate = info.raw_date;
    }
    const date = fmtdate ? `<p class="card-date">${fmtdate}</span>` : '';
    
    let links = `<a href="#${gallery}" class="share-link" id="shareLink" data-link="https://felixludos.com/#${gallery}-${entry}">
    <i class="fas fa-share-alt"></i></a>`;
    // let links = `<button class="icon-button" id="shareLink" data-link="https://felixludos.com/#${gallery}-${entry}">
    // <i class="fas fa-share-alt"></i></button>`;
    if (info.repo) {
        links += `<a href="https://github.com/${info.repo}" target="_blank" class="card-icon">
        <i class="fab fa-github"></i></a>`;
    }
    if (info.arxiv) {
        links += `<a href="https://arxiv.org/abs/${info.arxiv}" target="_blank" class="card-icon">
        <i class="fas fa-book-open"></i></a>`;
    }

    const projectHtml = `
    <a href="#${gallery}-${entry}" class="card-link">
        <div class="card">
            <!-- Left Content -->
            <div class="card-content">
                <div class="card-header">
                    ${emoji}
                    <h2 class="card-title">${info.title}</h2>
                </div>
                ${description}
                <div class="card-footer">
                    ${links}
                    ${date}
                </div>
            </div>
            <!-- Right Content -->
            ${coverImage}
        </div>
    </a>
    `;
    contentEl.innerHTML += projectHtml;

    const shareLinkElements = document.querySelectorAll('.share-link#shareLink');
    shareLinkElements.forEach(function(shareLinkElement) {
        shareLinkElement.addEventListener('click', function(event) {
            event.preventDefault(); // Prevents the default anchor behavior
            const projectLink = this.getAttribute('data-link');

            // Use the Clipboard API to write the link to the clipboard
            navigator.clipboard.writeText(projectLink).then(function() {
                // console.log('Link copied to clipboard successfully!');
                showNotification();
            }).catch(function(err) {
                console.error('Failed to copy link: ', err);
            });
        });
    });
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

function showNotification() {
    const notificationElement = document.getElementById('notification');
    notificationElement.classList.add('active');

    setTimeout(() => {
        notificationElement.classList.remove('active');
    }, 2000);
}

async function getLastEditDate(filePath, owner = 'felixludos', repo = 'homepage', branch = 'master') {
    try {
      const url = `https://api.github.com/repos/${owner}/${repo}/commits?path=${filePath}&sha=${branch}&page=1&per_page=1`;
      const response = await fetch(url);
      const data = await response.json();

    //   console.log(`github call ${response.ok}`);
    //   console.log(data);
  
      if (response.ok) {
        // The date is in ISO 8601 format: "YYYY-MM-DDTHH:MM:SSZ"
        return data[0].commit.committer.date;
      } else {
        console.error("Error retrieving data:", data);
        return null;
      }
    } catch (error) {
      console.error("An error occurred:", error);
      return null;
    }
  }
