const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

// Zorg ervoor dat CORS werkt voor je frontend
app.use(cors());

// MySQL verbinding
const connection = mysql.createConnection({
    host: '192.168.1.48',
    user: 'Matthias',
    password: 'MattiWoodDesign0831',
    database: 'planningsoftproduction' // Zorg ervoor dat dit de juiste database is
});

// Route om de projectgegevens op te halen
app.get('/api/projects', (req, res) => {
    connection.query('SELECT projectId, projectString, projectPartnerNumber, projectType FROM projects', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Fout bij ophalen van projecten' });
            return;
        }
        res.json(results);  // Stuurt de resultaten terug naar de frontend
    });
});

// Start de server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
