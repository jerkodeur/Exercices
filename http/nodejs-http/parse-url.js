const url = require('url');

// L'URL que nous voulons analyser
const exampleUrl = '/about?name=Jane&city=Boston';

// Résultat de l'analyse des paramètres, true = anlyser les paramêtres (optionnel)
const parsedUrl = url.parse(exampleUrl, true);

// Affiche les résultats
console.log('Parsed query string:');
console.log(parsedUrl.query); // { name: 'Jane', city: 'Boston' }

// Exemple sans un query string
const urlNoQuery = '/about';
const parsedUrlNoQuery = url.parse(urlNoQuery, true);
console.log(parsedUrlNoQuery.query); // {}