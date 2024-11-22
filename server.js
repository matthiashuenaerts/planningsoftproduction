const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3000;

// Zorg ervoor dat CORS werkt voor je frontend (toestellen in je netwerk)
app.use(cors());

// Stel de server in om JSON-data te kunnen ontvangen en versturen
app.use(express.json());

// MySQL verbinding instellen
const connection = mysql.createConnection({
    host: '192.168.1.48',  // Dit is het IP-adres van je MySQL-server
    user: 'Matthias',
    password: 'MattiWoodDesign0831',
    database: 'planningsoftproduction'  // Zorg ervoor dat dit de juiste database is
});

// Controleer of de verbinding werkt
connection.connect(err => {
    if (err) {
        console.error('Fout bij verbinden met de database: ' + err.stack);
        return;
    }
    console.log('Verbonden met de database als ID ' + connection.threadId);
});

// API endpoint voor het ophalen van projectgegevens
app.get('/api/projects', (req, res) => {
    connection.query('SELECT projectId, projectString, projectPartnerNumber, projectType FROM projects', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Fout bij ophalen van projecten' });
            return;
        }
        res.json(results);  // Stuurt de resultaten terug naar de frontend
    });
});

// Start de server en stel deze in om via je IP-adres toegankelijk te zijn
app.listen(port, '0.0.0.0', () => {
    console.log(`Server draait op http://0.0.0.0:${port}`);
});
