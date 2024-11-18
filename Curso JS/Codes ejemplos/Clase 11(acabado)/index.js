// funcion display de menus
function abrirMenu(menu){
    if(menu == "nuevoUsuario"){
        document.querySelector("#menuUsuario").style.display = "none";
        document.querySelector("#nuevoUsuario").style.display = "block";
    } else if (menu == "buscarUsuario"){
        document.querySelector("#menuUsuario").style.display = "none";
        document.querySelector("#buscarUsuario").style.display = "block";
    } else if (menu == "borrarUsuario"){
        document.querySelector("#menuUsuario").style.display = "none";
        document.querySelector("#borrarUsuario").style.display = "block";
    } else {
        document.querySelector("#borrarUsuario").style.display = "none";
        document.querySelector("#buscarUsuario").style.display = "none";
        document.querySelector("#nuevoUsuario").style.display = "none";
        document.querySelector("#menuUsuario").style.display = "block";
    }
    
}

// fin funcion display menus

// creamos array de personas
const arrayPersonas = [];

// Evento click nuevo usuario/cliente
document.querySelector("#buscarCliente").addEventListener("click", () => abrirMenu("buscarUsuario"));
// Evento click buscar usuario/cliente
document.querySelector("#nuevoCliente").addEventListener("click", () => abrirMenu("nuevoUsuario"));
// Evento click borrar usuario/cliente
document.querySelector("#borrarCliente").addEventListener("click", () => abrirMenu("borrarUsuario"));


// funcion nuevo usuario y control evento
document.querySelector("#formNuevoUsuario").addEventListener("submit", nuevoUsuario);

function nuevoUsuario (e){
    // Paramos el envio del formulario submit
    e.preventDefault();

    //Recuperamos información de los inputs
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const dni = document.querySelector("#dni").value;
    const edad = document.querySelector("#edad").value;

    //Creamos objeto persona
    const persona = new Persona(nombre,apellido,dni,edad);

    //Pushear en el array
    arrayPersonas.push(persona);

    //guardar el array en localstorage y convertirlo en JSON
    localStorage.setItem("arrayPersonas", JSON.stringify(arrayPersonas));

}
// fin funcion nuevo usuario

// funcion buscar usuario
document.querySelector("#formBuscarUsuario").addEventListener("submit", buscarUsuario);

function buscarUsuario(e){
    // Paramos el envio del formulario submit
    e.preventDefault();

    //Buscar información input DNI
    const dniBuscar = document.querySelector("#dniBuscar").value;

    //buscar en localstorage
    const arrayParaBuscar = JSON.parse(localStorage.getItem("arrayPersonas"));
    const resultadoBuscar = arrayParaBuscar.find(personita => personita.dni == dniBuscar);

    let textoPersonaEncontrada;
    if (resultadoBuscar != undefined){
        textoPersonaEncontrada = `<h2>${resultadoBuscar.nombre} ${resultadoBuscar.apellido}</h2>`;
        textoPersonaEncontrada += `<span>DNI: ${resultadoBuscar.dni}</span>` ;
    }else{
        textoPersonaEncontrada = "No hay ninguna coincidencia";
    }

    document.querySelector("#personaEncontrada").innerHTML = textoPersonaEncontrada;
}
//fin funcion buscar usuario

// función borrar usuario lupa

// fin funcion borrar usuario lupa

// funcion borrar usuario submit
document.querySelector("#formBorrarUsuario").addEventListener("submit", borrarUsuario);

function borrarUsuario(e){
    // Paramos el envio del formulario submit
    e.preventDefault();

    //Buscar la información del input DNI
    const dniBuscar = document.querySelector("#dniBorrar").value;

    //buscamos en el localstorage
    const arrayParaBuscar = JSON.parse(localStorage.getItem("arrayPersonas"));
    const resultadoDNIBorrar = arrayParaBuscar.filter(personita => personita.dni != dniBuscar);

    localStorage.setItem("arrayPersonas", JSON.stringify(resultadoDNIBorrar));

}
// fin funcion borrar usuario submit

// flecha volver al menu
const flechas = document.querySelectorAll(".flecha");

flechas.forEach(flecha => {
    flecha.addEventListener("click", abrirMenu);
});
// fin flecha volver al menú principal