document.addEventListener('DOMContentLoaded', function () {
    // Code to run after the DOM has loaded
    const projects = document.querySelectorAll('#projects .project');
    let currentProjectIndex = 0;

    function showProject(index) {
        projects.forEach((project, i) => {
            project.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextProject() {
        currentProjectIndex = (currentProjectIndex + 1) % projects.length;
        showProject(currentProjectIndex);
    }

    function prevProject() {
        currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
        showProject(currentProjectIndex);
    }

    // Initial display
    showProject(currentProjectIndex);

    // Attach event listeners for navigation
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');

    nextButton.addEventListener('click', nextProject);
    prevButton.addEventListener('click', prevProject);
});
