const fs = require('fs');
const path = require('path');

fs.readdir(
  path.join(__dirname, 'project-dist'),
  { withFileTypes: true },
  (err, files) => {
    if (err) console.log(err);
    files.forEach((file) => {
      if (!file.isFile()) {
        return;
      }
      const extension = file.name.split('.')[1];
      if (extension === 'css') {
        fs.truncate(path.join(__dirname, 'project-dist', file.name), (err) => {
          if (err) throw err;
        });
      }
    });
  },
);

const bundlePath = path.join(__dirname, 'project-dist', 'bundle.css');
const output = fs.createWriteStream(bundlePath);

fs.readdir(
  path.join(__dirname, 'styles'),
  { withFileTypes: true },
  (err, files) => {
    if (err) console.log(err);
    files.forEach((file) => {
      if (!file.isFile()) {
        return;
      }
      const extension = file.name.split('.')[1];
      if (extension === 'css') {
        const input = fs.createReadStream(
          path.join(__dirname, 'styles', file.name),
        );
        input.pipe(output);
      }
    });
  },
);
