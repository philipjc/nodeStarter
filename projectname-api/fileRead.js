import fs from 'fs';
import async from 'async';

module.exports = fileReader => {
  
  // syncronous example
  // let content;
  // try {
  //   content = fs.readFileSync('basicfiles/demofile.txt', 'utf-8');
  // }
  // catch (ex) {
  //   console.log(ex)
  // }

  // console.log(`content from file read: `, content);

  // async example
  const readCurrent = (filename) => {

    console.log(`start reading a file...`);

    fs.readFile(filename, 'utf-8', (err, content) => { 
      
      if (err) {

        console.log('error happened during reading the file');

        return console.log(err); 

      }

      console.log(`here's the content: `, content);

    });

    console.log('end of the file');
  }

  // readCurrent('basicfiles/demofile.txt');
  // async.parallel([() => {readCurrent('basicfiles/demofile.txt')}, () => {readCurrent('basicfiles/demofile2.txt')}], (err, res) => {
  //   console.log(res);
  // });

  // Promise
  const stats = (file) => {
    return new Promise((resolve, reject) => {
      fs.stat(file, (err, data) => {
        if (err) {
          return reject(err);
        }
        resolve(data)
      })
    })
  }

  // Promise.all([
  //   stats('basicfiles/demofile.txt'),
  //   stats('basicfiles/demofile2.txt'),
  //   stats('basicfiles/demofile3.txt')
  // ])
  // .then((data) => console.log(data))
  // .catch((err) => console.log(err))

}
