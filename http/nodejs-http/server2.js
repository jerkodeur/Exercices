const http = require('http');
const url = require('url');
const port = 8000;

const requestHandler = (request, response) => {
  // Pick the parameters of the url
  const parsedUrl = url.parse(request.url, true).query;
  // Define each parameter
  const name = parsedUrl.name;
  const city = parsedUrl.city;
  // Switch between the parameters to display a custom message
  if (!name && !city) {
    response.end('Please provide name and city parameters');
  }
  else if (!name) {
    response.end('Please provide name parameter');
  } else if (!city) {
    response.end('Please provide city parameter');
  } else {
    response.end(`Hello ${name} from ${city}`);
  }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) { // On vérifie si la connexion a échouée
    console.log('Something bad happened');
  } else { // Sinon, on affiche un message dans la console
    console.log(`server is listening on ${port}`);
  }
});