const fs = require('fs');
const path = require('path');
const txtPath = path.resolve(__dirname, './text.txt');

const readStream = fs.createReadStream(txtPath);
readStream.on('readable', () => {
  console.log(`Inner text: ${readStream.read()}`);
});
//readStream.on('end', () => {});
