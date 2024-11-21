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
