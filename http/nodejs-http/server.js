const http = require('http'); // Import du module http
const port = 8000; // Port sur lequel le serveur va écouter, cad attendre les requêtes

// Interception des requêtes envoyées d'un client vers le serveur
// et y répondre en renvoyant du contenu
const requestHandler = (request, response) => {
  console.log(request.url);
  if (request.url === '/') {
    response.end('Hello Node.js Server!');
  } else if (request.url === '/about') {
    response.end('This demonstrates routing with Node.js.');
  } else {
    response.end('Default page (URLs other than / and /about)');
  }
};

// Création d'un serveur qui envoyer les requêtes de la fonciton requestHandler
const server = http.createServer(requestHandler);

// On demande au serveur d'écouter sur le port renseigné précédemment (8000)
server.listen(port, (err) => { // Après la virgule, un callback qui permet de tester la connexion (pas obligatoire)
  if (err) { // On vérifie si la connexion a échouée
    console.log('Something bad happened');
  } else { // Sinon, on affiche un message dans la console
    console.log(`server is listening on ${port}`);
  }
});