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

