// Inloglogica
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Verkrijg de gebruikersnaam en het wachtwoord
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Voorbeeld van inloggegevens (je kunt dit vervangen door een serververificatie)
    var validUsername = "admin";
    var validPassword = "password123";

    // Vergelijk de ingevoerde gegevens met de voorbeeldgegevens
    if (username === validUsername && password === validPassword) {
        // Als de inloggegevens correct zijn, ga dan naar de hoofdpagina
        window.location.href = "dashboard.html"; // Dit is de pagina die de gebruiker na inloggen ziet
    } else {
        // Als de inloggegevens incorrect zijn, toon een foutmelding
        document.getElementById("error-message").style.display = "block";
    }
});


// Variabele voor de huidige breedte van de sidebar
let sidebarWidth = 250;

// Functie om de huidige pagina te veranderen
function setCurrentPage(page) {
    const content = document.getElementById("content");
    content.innerHTML = `<h1>${page}</h1><p>Beheer je ${page} vanuit dit overzicht.</p>`;
}

// Functie om uit te loggen
function onLogout() {
    alert("Je bent uitgelogd!");
    // Je zou hier de gebruiker kunnen omleiden naar de inlogpagina
}

// Functie om de breedte van de sidebar aan te passen
function initSidebarResizer() {
    const sidebar = document.getElementById("sidebar");
    const sidebarResizer = document.getElementById("sidebar-resizer");

    sidebarResizer.addEventListener("mousedown", (e) => {
        e.preventDefault();
        const startX = e.clientX;
        const startWidth = sidebarWidth;

        // Mousemove handler voor het slepen
        const onMouseMove = (moveEvent) => {
            const newWidth = startWidth + (moveEvent.clientX - startX);
            if (newWidth >= 150 && newWidth <= 500) {
                sidebar.style.width = newWidth + "px";
                sidebarWidth = newWidth; // Werk de sidebar breedte bij
            }
        };

        // Stop het slepen
        const onMouseUp = () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
    });
}

// Initialiseer de resizer bij het laden van de pagina
window.onload = initSidebarResizer;
