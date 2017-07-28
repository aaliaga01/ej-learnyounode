var fs= require('fs');
var objeto= process.argv[2];
var saltos= 0;


function ioAsync(callback){
	fs.readFile(objeto, function(err,data){
	var string= data.toString();
	string= string.split('\n');
	saltos= string.length-1;
	callback();
	})
}

function mostrarRes(){
console.log(saltos);
}

ioAsync(mostrarRes);
