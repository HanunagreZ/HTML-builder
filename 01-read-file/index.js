const fs = require('fs');
const path = require('path');
const txtPath = path.resolve(__dirname, './text.txt');

const readStream = fs.createReadStream(txtPath);
readStream.on('data', (chunk) => console.log(chunk.toString()));
readStream.on('end', () => {});
