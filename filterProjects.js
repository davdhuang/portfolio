
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        filterProjects(category);
    });
});

function filterProjects(category) {
    document.querySelectorAll('.project-container').forEach(project => {
        if (project.getAttribute('data-category') === category || category === 'all') {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}