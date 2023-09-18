
const contentEl = document.getElementById('content');
// const grayMatter = window.grayMatter || matter;

document.addEventListener('DOMContentLoaded', function() {
    // Event listener for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            loadPage(e.target.dataset.page);
        });
    });

    // Load default page
    loadPage('home');
});


function loadPage(page, projectTitle) {
    switch(page) {
        case 'home':
            contentEl.innerHTML = '<h2>Welcome to my portfolio</h2>';
            break;
        case 'projects':
            loadProjectsGallery();
            break;
        case 'project':
            loadProjectPage(projectTitle);
            break;
        case 'about':
            contentEl.innerHTML = '<h2>About Me</h2>';
            break;
    }
}

function loadProjectsGallery() {
    // Fetch the list of markdown files from projects.json
    fetch('projects.json')
        .then(response => response.json())
        .then(files => {
            files.forEach(file => {
                fetch(`projects/${file}`)
                    .then(response => response.text())
                    .then(content => {
                        const frontMatter = extractFrontMatter(content);
                        const markdownContent = removeFrontMatter(content); // Remove front matter from content
                        const renderedContent = marked(markdownContent); // Use marked to render the markdown
                        // console.log(frontMatter)
                        if (markdownContent) {
                            // If the markdown file has content, display it
                            addProjectToGallery(frontMatter, renderedContent);
                        } else if (frontMatter.repo) {
                            // If there's an associated GitHub repo, fetch the README
                            const [username, repoName] = frontMatter.repo.split('/');
                            fetchGitHubReadme(username, repoName, frontMatter);
                        }
                    });
            });
        });
}

function addProjectToGallery(frontMatter, content) {
    const projectHtml = `
        <div class="project-card">
            <h3>${frontMatter.title}</h3>
            <p>Author: ${frontMatter.author}</p>
            <p>Date: ${frontMatter.date}</p>
            <div class="description">${content}</div>
        </div>
    `;
    contentEl.innerHTML += projectHtml;
}

function fetchGitHubReadme(username, repoName, frontMatter) {
    const apiUrl = `https://api.github.com/repos/${username}/${repoName}/readme`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const readmeContent = atob(data.content); // Decode base64 content
            const renderedReadme = marked(readmeContent); // Render the markdown
            addProjectToGallery(frontMatter, renderedReadme);
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


