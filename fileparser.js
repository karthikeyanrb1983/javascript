const fs = require('fs') 
  
 fs.readFile('mynewfile1.txt', (err, data) => { 
    if (err) throw err; 
  
   dataString = data.toString();

    filesInLines = dataString.split('\n');
    console.log(filesInLines);
    filesInLines = dataString.s


});

// console.log(files.length);