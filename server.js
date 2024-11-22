const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Maak verbinding met de MySQL database
const db = mysql.createConnection({
    host: '192.168.1.48',
    port: 3306,
    user: 'Matthias',
    password: 'MattiWoodDesign0831',
    database: 'your_database_name' // Verander dit naar je werkelijke database naam
});

const app = express();
app.use(cors());
app.use(express.json());

// API endpoint om projecten op te halen
app.get('/api/projects', (req, res) => {
    const query = 'SELECT projectId, projectString, projectPartnerNumber, projectType FROM projects';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send('Error retrieving projects');
        }
        res.json(results);
    });
});

// Start de server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
