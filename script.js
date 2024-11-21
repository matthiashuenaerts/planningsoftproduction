// Login functionaliteit
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Voorkom standaard formulier versturen

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Inloggegevens controleren
    if (username === 'user' && password === 'password123') {
        window.location.href = 'dashboard.html'; // Doorgaan naar dashboard bij succesvolle login
    } else {
        document.getElementById('login-error').classList.remove('hidden'); // Toon foutmelding
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
