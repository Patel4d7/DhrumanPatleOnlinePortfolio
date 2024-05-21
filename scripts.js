document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Interactive charts for experience sections
    const createExperienceChart = (id, type, data, options) => {
        const ctx = document.getElementById(id).getContext('2d');
        new Chart(ctx, {
            type: type,
            data: data,
            options: options
        });
    };

    createExperienceChart('siemensChart', 'bar', {
        labels: ['SQL Optimization', 'System Integration', 'Clean Code', 'Efficiency'],
        datasets: [{
            label: 'Skills Learned',
            data: [70, 85, 90, 75],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    }, {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    });

    createExperienceChart('phillipsChart', 'line', {
        labels: ['Infrastructure Design', 'Automation', 'Software Reuse'],
        datasets: [{
            label: 'Skills Learned',
            data: [75, 80, 70],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    }, {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    });

    createExperienceChart('cincinnatiChart', 'radar', {
        labels: ['Cloud Scaling', 'Config Management', 'User Retention'],
        datasets: [{
            label: 'Skills Learned',
            data: [80, 75, 85],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
        }]
    }, {
        scales: {
            r: {
                beginAtZero: true
            }
        }
    });

    createExperienceChart('ucTechChart', 'polarArea', {
        labels: ['Collaboration', 'System Auditing', 'Usability Optimization'],
        datasets: [{
            label: 'Skills Learned',
            data: [85, 80, 75],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    });

    // Interactive chart for skills
    const skillsCtx = document.getElementById('skillsChart').getContext('2d');
    new Chart(skillsCtx, {
        type: 'radar',
        data: {
            labels: ['Java', 'C++', 'Python', 'JavaScript', 'React', 'SQL'],
            datasets: [{
                label: 'Proficiency',
                data: [90, 85, 95, 80, 75, 85],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true
                }
            }
        }
    });

    // Interactive chart for projects
    const projectsCtx = document.getElementById('projectsChart').getContext('2d');
    new Chart(projectsCtx, {
        type: 'pie',
        data: {
            labels: ['Website Development', 'Android App', 'Nexus Application'],
            datasets: [{
                label: 'Projects',
                data: [40, 30, 30],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });
});
