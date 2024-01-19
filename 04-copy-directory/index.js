const fs = require('fs');
const path = require('path');

const pathDir = path.join(__dirname, 'files-copy');
const dirToCopy = path.join(__dirname, 'files');

fs.access(pathDir, fs.F_OK, (err) => {
  if (err) {
    fs.mkdir(path.join(__dirname, 'files-copy'), (err) => {
      if (err) {
        return console.error(err);
      }
    });
  }
  fs.readdir(pathDir, (err, files) => {
    if (err) throw err;
    for (const file of files) {
      fs.unlink(path.join(pathDir, file), (err) => {
        if (err) throw err;
      });
    }
  });
  fs.cp(dirToCopy, pathDir, { recursive: true }, (err) => {
    if (err) return console.error(err);
  });
});
