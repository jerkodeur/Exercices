// readfiles-sync.js
const fs = require('fs'); // import filesystem module

console.log('Read dir - Start');
const files = fs.readdirSync('.');
console.log(files);
console.log('Read dir - Done');

// for-of is another way to iterate over an array
console.log('Read file content - Start');
for (let file of files) {
  // this skips the iteration if the file is a directory
  if (fs.lstatSync(file).isDirectory()) continue;
  const content = fs.readFileSync(file, 'utf8');
  console.log('---', file, '---');
  console.log(content);
}
console.log('Read file content - Done');