const Abrir = document.getElementById("btnnueva");
const Cerrar = document.getElementById("entradaCerrar");

const nuevaentrada = document.getElementsByClassName("nueva-entrada")[0]
const entrada = document.getElementsByClassName("entrada")[0]

Abrir.addEventListener("click", ()=> {
    nuevaentrada.classList.toggle("nueva-active")
})
Cerrar.addEventListener("click", ()=> {
    nuevaentrada.classList.toggle("nueva-active")
})
// // entrada.addEventListener("click",(e)=>{
// //     e.stopPropagation()
// })
nuevaentrada.addEventListener("click", ()=>{
    Cerrar.click()
})