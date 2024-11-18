let user = prompt ("usuario");
let edad = prompt ("edad");

edad = parseInt(edad);

if((user == "Asd") || (user == "asd") || (user == "asD") || (user == "asD") || (user == "ASD")){
    alert("el nombre ingresado es correcto");
}else{
    alert("el nombre iniciado es incorrecto");
}
if(edad == "12"){
    alert ("correcto es" +edad);
}else{
    alert("errado" + edad);
}