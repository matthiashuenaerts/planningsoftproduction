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
    connection.query(`
        SELECT projectId, projectString, projectPartnerNumber, projectType, 
               bufferDate, projectInstallDateStart, projectInstallDateStop, 
               projectInstallTeam, projectPhase1, projectPhase2, projectPhase3, 
               projectPhase4, projectPhase5, projectPhase6, projectPhase7, projectPhase8, 
               projectPhase9, projectPhase10, projectPhase11, projectPhase12, projectPhase13, 
               projectPhase14, projectPhase15, projectPhase16, projectPhase17, projectPhase18, 
               projectPhase19, projectPhase20, projectPhase21, projectPhase22, projectPhase23, 
               projectPhase24, projectPhase25, projectPhase26, projectPhase27, projectPhase28, 
               projectPhase29, projectPhase30, projectPhase31, projectPhase32, projectPhase33, 
               projectPhase34, projectPhase35, projectPhase36, projectPhase37, projectPhase38, 
               projectPhase39, projectPhase40, projectPhase41, projectPhase42, projectPhase43, 
               projectPhase44 
        FROM projects
    `, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Fout bij ophalen van projecten' });
            return;
        }
        console.log(results);  // Log de resultaten naar de console om te controleren
        res.json(results);  // Stuurt de resultaten terug naar de frontend
    });
});
// Start de server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
