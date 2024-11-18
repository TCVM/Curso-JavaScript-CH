//gracias emi. Me tomo MUCHISIMO tiempo entender como funcionaba el menu del carrito y agregarlo correctamente a mi trabajo. Pero se pudo.
const Abrir = document.getElementById('btnnueva');
const Cerrar = document.getElementById('entradaCerrar');

const nuevaentrada = document.getElementsByClassName('nueva-entrada')[0]
const agregarr = document.getElementsByClassName('agregar')[0]

Abrir.addEventListener('click', ()=> {
    nuevaentrada.classList.toggle('nueva-active')
})
Cerrar.addEventListener('click', ()=> {
    nuevaentrada.classList.toggle('nueva-active')
    localStorage.setItem('entry',JSON.stringify(aarray));
    buscar(aarray);
})
 agregarr.addEventListener('click',(e)=>{
     e.stopPropagation()
})
nuevaentrada.addEventListener('click', ()=>{    
    Cerrar.click()
})