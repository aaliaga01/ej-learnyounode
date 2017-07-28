var arreglo = process.argv;
var total=0;
for (var i = 2; i < arreglo.length; i ++){
	total += Number(arreglo[i]);
}
console.log(total);
