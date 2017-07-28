var fs= require('fs');
var ruta= require('path');
var objeto= process.argv[2];
var objeto2= process.argv[3];

fs.readdir(objeto, function(err,data){
	if(err)
		return error;
	callback(data);
});

function callback(data){
	 
	for (var i=0; i< data.length; i++){
		if(ruta.extname(data[i])=="." + objeto2)
			console.log(data[i]);
	}
}
