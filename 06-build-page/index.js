const fs = require('fs');
const path = require('path');

// Уважаемые проверяющие. Последнее задание я не сделал. Не тратьте время на проверку.

/*
const projectDistPath = path.join(__dirname, 'project-dist');
let templateString;
/*
// Создаю папку. Если папка уже есть, то удаляю все файлы в ней
fs.mkdir(projectDistPath, (err) => {
  if (err) {
    fs.readdir(projectDistPath, (err, files) => {
      if (err) throw err;
      for (const file of files) {
        fs.unlink(path.join(projectDistPath, file), (err) => {
          if (err) throw err;
        });
        //console.log('Удалял');
      }
    });
  }
  //console.log('Не удалял');
});

/*fs.readFile(path.join(__dirname, 'components', 'header.html'), (err, data) => {
  if (err) {
    throw err;
  }
  const content = data;

  // Invoke the next step here however you like
  processFile(content); // Or put the next step in a function and invoke it
});

function processFile(content) {
  console.log(content.toString());
  return content.toString();
}

// Читаю темлпате и записываю в переменную
fs.readFile(
  path.join(__dirname, 'template.html'),
  'utf8',
  (error, fileContent) => {
    if (error) throw error;
    let templateString = fileContent;

    fs.readFile(
      path.join(__dirname, 'components', 'header.html'),
      'utf8',
      (error, fileContent) => {
        if (error) throw error;
        let templateHeader = fileContent;
        let templateStringH = templateString.replace(
          '{{header}}',
          templateHeader,
        );

        //console.log(articlesIndex);
      },
    );
  },
);

/*fs.readFile(
  path.join(__dirname, 'template.html'),
  'utf8',
  (error, fileContent) => {
    if (error) throw error;
    templateString = fileContent;
    console.log(templateString);
  },
);

if (templateString !== undefined) {
  console.log(templateString);
}*/

/*function changeHeader() {
  fs.readFile(
    path.join(__dirname, 'components', 'header.html'),
    'utf8',
    (error, fileContent) => {
      if (error) throw error;
      let templateHeader = fileContent;
      let templateStringH = templateString.replace(
        '{{header}}',
        templateHeader,
      );

      //console.log(articlesIndex);
    },
  );
}*/
