let inp=prompt("Ingrese la cadena de caracteres:");
let arreglo=inp.split("");
function esunaletra() {
    return (/[a-zA-Z]/).test(arreglo[1])
}
console.log(arreglo);
if (arreglo.length===3 && (arreglo[0]>=0 || arreglo[0]<=9) && esunaletra()===true && arreglo[2]==='$') {
    console.log("El identificador es correcto");
}
else{
    console.log("No pertenece al lenguaje");
}
