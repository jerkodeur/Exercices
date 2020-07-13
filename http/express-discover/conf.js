const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost', // adresse du serveur
  user: 'root', // le nom d'utilisateur
  password: 'JP93@s12RT77', // le mot de passe
  database: 'wild', // le nom de la base de données
});
module.exports = connection;