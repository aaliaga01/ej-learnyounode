var fs= require('fs');
var objeto= fs.readFileSync(process.argv[2]);
var string= objeto.toString();
var saltos= string.split('\n').length-1;
console.log(saltos);