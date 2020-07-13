const request = require('request');
request('https://swapi.dev/api/people/1/', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  var luke = JSON.parse(body)
  console.log(luke)
  console.log(luke.films[0])
  request(luke.films[0], (err, res, filmBody) => {
    console.log('Error:', err);
    console.log('statusCode:', response && response.statusCode);
    var firstFilm = JSON.parse(filmBody)
    console.log(firstFilm.title)
  })
});