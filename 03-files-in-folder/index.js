const fs = require('fs');
const path = require('path');

fs.readdir(
  path.join(__dirname, 'secret-folder'),
  { withFileTypes: true },
  (err, files) => {
    console.log('\nSecret-folder files:\n');
    if (err) console.log(err);
    else {
      files.forEach((file) => {
        if (!file.isFile()) {
          return;
        }
        const filename = file.name.split('.')[0];
        const extension = file.name.split('.')[1];
        fs.stat(
          path.join(__dirname, 'secret-folder', file.name),
          (error, stats) => {
            if (error) {
              console.log(error);
            } else {
              console.log(`${filename} - ${extension} - ${stats.size}b`);
            }
          },
        );
      });
    }
  },
);
