// Login functionaliteit
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Voorkom standaard formulier versturen

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Inloggegevens controleren
    if (username === 'user' && password === 'password123') {
        // Doorgaan naar dashboard
        window.location.href = 'dashboard.html';
    } else {
        // Toon foutmelding als inloggen mislukt
        document.getElementById('login-error').classList.remove('hidden');
    }
});

// Dashboard functionaliteit
function setCurrentPage(page) {
    document.getElementById('content').innerHTML = `<h1>${page}</h1><p>Inhoud van ${page} wordt hier weergegeven.</p>`;
}

// Uitlogfunctie
function onLogout() {
    window.location.href = 'index.html'; // Terug naar inlogpagina bij uitloggen
}


function setCurrentPage(page) {
    if (page === 'Home') {
        // Haal projectgegevens op van de server
        fetch('db.php')
            .then(response => response.json())
            .then(data => {
                const table = document.createElement('table');
                table.classList.add('data-grid');
                const header = document.createElement('tr');
                header.innerHTML = `
                    <th>Project ID</th>
                    <th>Project String</th>
                    <th>Project Partner Number</th>
                    <th>Project Type</th>
                `;
                table.appendChild(header);

                // Vul de datagrid met projecten
                data.forEach(project => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${project.projectId}</td>
                        <td>${project.projectString}</td>
                        <td>${project.projectPartnerNumber}</td>
                        <td>${project.projectType}</td>
                    `;
                    table.appendChild(row);
                });

                // Vervang de content in de dashboard
                document.getElementById('content').innerHTML = '<h1>Home</h1>';
                document.getElementById('content').appendChild(table);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                document.getElementById('content').innerHTML = '<h1>Error loading data</h1>';
            });
    } else {
        // Andere pagina's
        document.getElementById('content').innerHTML = `<h1>${page}</h1><p>Inhoud van ${page} wordt hier weergegeven.</p>`;
    }
}
