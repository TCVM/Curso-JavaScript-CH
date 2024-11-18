
// const abierto = document.getElementById(`ampliar${ent.number}`);
const cerrado = document.getElementById('zoomCerrar');
const visormodal = document.getElementsByClassName('visor-modal')[0]
const ampliar = document.getElementsByClassName('ver')[0]

// abierto.addEventListener('click', ()=> {
//     ampliacion.classList.toggle('ampliacion-active')
// })
cerrado.addEventListener('click', ()=> {
    visormodal.classList.toggle('visor-active')


})
 ampliar.addEventListener('click',(e)=>{
     e.stopPropagation()
})
visormodal.addEventListener('click', ()=>{    
   
   cerrado.click()
})