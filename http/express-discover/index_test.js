const http = require('http');
const url = require('url');
const port = 8000;

const requestHandler = (request, response) => {
  const myParsedUrl = url.parse(`/${request.url}`, true);
  const donnesUrl = myParsedUrl.query;

  if (request.url === '/' || request.url === '/?name=' || request.url === '/?name=&city=' || request.url === '/?city=') {
    response.end('Please provide name AND city parameters');
  } else {
    response.end(`Hello ${donnesUrl.name} from ${donnesUrl.city} !
              Your firstname is: ${donnesUrl.name},
              City of residence: ${donnesUrl.city}`);
  }
};

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`server is listening on ${port}`);
  }
});