/*Use SweetAlert para avisar cada vez que se agrega de manera correcta una nueva entrada al vector, integre toastify para avisar cada vez que se eliminaba correctamente un
  elemento del vector(salio mas o menos bien, mas info en el comentario respectivo), luxon no funciono como va a estar explicado mas abajo. Agregue mejoras para hacer a 
  pag un poco mas amigable al usuario como sugeriste y le agregue otros colores y una presentacion ademas de un footer para que no se sintiera tan vacia. Todavia tengo que ver
  que otra funcionalidad le agrego. Por ahora creo que cumple con el desafio.*/

let aarray = [];

let  inputchoice = document.getElementById("choice"); 

const Main = document.getElementById("cuerpo");
const newentrada = document.getElementsByClassName('nueva-entrada')[0]
const newentry = document.getElementById("btnnueva");
const search = document.getElementById("search");
const principal= document.getElementById("principal");
//const DateTime= luxon.DateTime;            nisiquiera reconoce la palabra "luxon", simplemente no quizo funcionar

function arranque(){
    newentry.onclick=()=>{nueva()};
    search.onclick=()=>{
        inputchoice.value == ""? buscar(aarray) : filtro(aarray); 
    };
    principal.onclick=()=>presentacion(); //Boton en el titulo que devuelve a la "pagina" principal
    buscar(aarray); 
}

arranque();

function nueva(){ 
    let input3 = document.getElementById("img");
    let input1 = document.getElementById("title");
    let input2 = document.getElementById("core");
    const ok=document.getElementById("ok");
    // ok.addEventListener("click", ()=>{
    //     aarray.push(new entrys(input1.value,input2.value,this.fecha=new Date(),aarray.length+1,input3.value));
        
        
        //    Swal.fire({
        //       title:"Completado", text:"Entrada almacenada", icon: "success", confirmButtonText: "Continuar"
        //   })
          
    //})
     //ok.onclick=() => aarray.push(new entrys(input1.value,input2.value,this.fecha=new Date(),aarray.length+1,input3.value));
     //localStorage.setItem('entry',JSON.stringify(aarray));
     // buscar(aarray);
    //buscar(aarray);

    ok.onclick=() =>agregar(input1,input2,input3); //no pude usar eventelistener, me creaba duplicados de las entradas por algun motivo, tambien daba problemas para cerrar
                                                   // el modal, por eso en el archivo entrada.js hay otra funcion que agrega otro evento al boton. Un bardo ya lo se.
                                                   //el SweetAlert quedo en el otro evento para que no haya mas problemas.
   

}
function agregar(input1,input2,input3){
    aarray.push(new entrys(input1.value,input2.value,this.fecha=new Date()/*DateTime.local()*/,aarray.length+1,input3.value));
     localStorage.setItem('entry',JSON.stringify(aarray));
     buscar(aarray);
}

function presentacion(){
    Main.innerHTML= ""
    let div = document.createElement('div')
 div.innerHTML += `
                        <p><h2><strong>Un anotador para cuando necesitas guardar esas teorias conspirativas</strong></h2></p>
                         <img src=https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wccftech.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fhalf-life-3-i-want-to-believe.jpg&f=1&nofb=1>
                         <p><strong>O cualquier otra cosa que te quieras acordar...</strong></p>
 `                      
 Main.appendChild(div);

}

function buscar(array){ 
    
    Main.innerHTML= ""
    
   array.forEach(ent => {

       let div = document.createElement('div')
       div.classList.add('entryy')
    div.innerHTML += `
                    <div class="card">
                        <div class="card-image">
                            <img src=${ent.img}>
                            <span class="card-title">${ent.title}</span>
                            <p>${ent.number} </p>
                        </div>
                        <div class="card-content">
                            <p>${ent.core}</p>
                            <p> ${ent.fecha}</p>
                       
    `
    Main.appendChild(div);

   })


}
function eliminar(number){
    aarray = aarray.filter(e=> e.number !=number);
    localStorage.setItem('entry',JSON.stringify(aarray));
    buscar(aarray);
    Toastify({
        text: "Entrada Eliminada",
        duration: 1500,
        gravity: "top", 
        position: "right", 
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();    //Toastify funciona...mas o menos, por algun motivo aparecen los toast encima del header, no estoy seguro porque, hace su trabajo a medias supongo.

}




function filtro(aarray){

                    let encontrar = aarray.filter(el => el.number == inputchoice.value);
                    Main.innerHTML= "";

                     encontrar.find((el)=>el.number == inputchoice.value ) || noexiste();
                    
                    encontrar.forEach(ent => {
                 
                        let div = document.createElement('div')
                        div.classList.add('entryy')
                     div.innerHTML += `
                                     <div class="card">
                                         <div class="card-image">
                                             <img src=${ent.img}>
                                             <span class="card-title">${ent.title}</span>
                                             <p>${ent.number} </p>
                                         </div>
                                         <div class="card-content">
                                             <p>${ent.core}</p>
                                             <p> ${ent.fecha}</p>
                                         </div>
                                         <button id="eliminar${ent.number}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                                     </div>
                     `
                     Main.appendChild(div);
                 
                     let btnEliminar = document.getElementById(`eliminar${ent.number}`);
                     btnEliminar.addEventListener('click',()=>{ eliminar(ent.number)})
            })
            
        //}
             
}

function noexiste(){ let div= document.createElement("div"); div.innerHTML= `<h1> ${"Not Found"} </h1>`; Main.appendChild(div) };


function recuperar() {

    let recuperarLS = JSON.parse(localStorage.getItem('entry'))||[];

    recuperarLS && recuperarLS.forEach(el=> {aarray.push(el);});

};
   presentacion()
   recuperar();
   //buscar(aarray);
