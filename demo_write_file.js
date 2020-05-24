var fs = require('fs')

fs.writeFile('myNewWriteFile.js', 'Hello World !!', function(err){
  if(err) throw err
  console.log('Saved !!');
});
