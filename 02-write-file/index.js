const fs = require('fs');
const { stdin, stdout } = process;

const output = fs.createWriteStream('./02-write-file/write.txt');

stdout.write('Hello there! Print what you want or exit to break script\n');

stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    console.log('Exit!');
    process.exit();
  }
  output.write(data);
});

process.on('SIGINT', () => process.exit());

process.on('exit', () => stdout.write('Adding text to the file is finished.'));
