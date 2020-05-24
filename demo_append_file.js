var fs = require('fs')

console.log(fs);

fs.appendFile('myNewWriteFile.js', 'Hello World !!', function(err){
  if(err) throw err
  console.log('Saved !!');
});
