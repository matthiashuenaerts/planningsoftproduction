<?php
$servername = "192.168.1.48";
$username = "Matthias";
$password = "MattiWoodDesign0831";
$dbname = "planning_soft_production"; // Verander dit naar de naam van je database

// Maak verbinding
$conn = new mysqli($servername, $username, $password, $dbname, 3306);

// Controleer verbinding
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Haal gegevens uit de "projects" tabel
$sql = "SELECT projectId, projectString, projectPartnerNumber, projectType FROM projects";
$result = $conn->query($sql);

$projects = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $projects[] = $row;
    }
}

// Sluit verbinding
$conn->close();

// Stuur de gegevens terug als JSON
echo json_encode($projects);
?>
