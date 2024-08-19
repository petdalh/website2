const projects = [
    { id: 1, name: "TinTrim", categories: "Trimble sommerjobb 2024", description: "" },
    { id: 2, name: "Fern", categories: "Addwize sommerjobb 2023", description: "" },
    { id: 3, name: "Maskin-læring prosjekt", categories: "Prosjekt i faget TDT4173", description: "" },
    // Add more projects as needed
];

// Store projects in localStorage
localStorage.setItem('projects', JSON.stringify(projects));

document.addEventListener('DOMContentLoaded', function() {
    const projectList = document.querySelector('#projectList tbody');

    if (projectList) {
        projects.forEach(project => {
            const row = projectList.insertRow();
            row.classList.add('clickable-row');
            row.setAttribute('data-href', `project.html?id=${project.id}`);
            row.insertCell(0).textContent = project.name;
            row.insertCell(1).textContent = project.categories;
        });

        // Add click event listener to the table
        projectList.addEventListener('click', function(e) {
            const target = e.target.closest('tr');
            if (target && target.classList.contains('clickable-row')) {
                window.location.href = target.getAttribute('data-href');
            }
        });

        console.log('Projects loaded:', projects.length);
    }

    // Load project details if on project page
    if (window.location.pathname.includes('project.html')) {
        const projectId = parseInt(getUrlParameter('id'));
        const storedProjects = JSON.parse(localStorage.getItem('projects'));
        const project = storedProjects.find(p => p.id === projectId);
        
        if (project) {
            document.getElementById('projectTitle').textContent = project.name;
            document.getElementById('projectCategories').textContent = project.categories;
            document.getElementById('projectDescription').textContent = project.description;
        }
    }
});

// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}