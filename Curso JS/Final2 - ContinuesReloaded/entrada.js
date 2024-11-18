
const Abrir = document.getElementById('btnnueva');
const Cerrar = document.getElementById('entradaCerrar');
const nuevaentrada = document.getElementsByClassName('nueva-entrada')[0]
const agregarr = document.getElementsByClassName('agregar')[0]
const ok=document.getElementById("ok");

Abrir.addEventListener('click', ()=> {
    nuevaentrada.classList.toggle('nueva-active')
})
Cerrar.addEventListener('click', ()=> {
    nuevaentrada.classList.toggle('nueva-active')
    //buscar(aarray);
})
 agregarr.addEventListener('click',(e)=>{
     e.stopPropagation()
})
nuevaentrada.addEventListener('click', ()=>{    
    Cerrar.click()
})

ok.addEventListener('click', ()=>{ 
    //localStorage.setItem('entry',JSON.stringify(aarray));   
    Cerrar.click()
    Swal.fire({
               title:"Completado", text:"Entrada almacenada", icon: "success", confirmButtonText: "Continuar"
          })
    //buscar(aarray);
})