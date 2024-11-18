/*Esto va a ser mucho mas corto, lo prometo. Agregue un aviso "not found" en  caso de que se ingrese un id que no esta dentro del array. Todos los operadores avanzados que pude
 usar fueron optimizacioness de condicionales como ANDs y ORs, no pude usar desestructuracion de objetos ni de arrays porque en ninguna de mis funciones eran necesarios. Lo mismo con
 el spread */

let aarray = [];

let  inputchoice = document.getElementById("choice"); 

const Main = document.getElementById("cuerpo");

const newentry = document.getElementById("btnnueva");
const search = document.getElementById("search");

function arranque(){
    newentry.onclick=()=>{nueva()};
    search.onclick=()=>{
        inputchoice.value == ""? buscar(aarray) : filtro(aarray); //operador ternario
        //filtro(aarray)
    };
    buscar(aarray); 
}

arranque();

function nueva(){ 
    let input3 = document.getElementById("img");
    let input1 = document.getElementById("title");
    let input2 = document.getElementById("core");
    const ok=document.getElementById("ok");
    ok.onclick=() => aarray.push(new entrys(input1.value,input2.value,this.fecha=new Date(),aarray.length+1,input3.value));
    buscar(aarray);
  
    localStorage.setItem('entry',JSON.stringify(aarray));

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

}




function filtro(aarray){
    // inputchoice = document.getElementById("choice");  

                
                // if(input1.value == ""){
                //     buscar(aarray);
                // }else{
                    let encontrar = aarray.filter(el => el.number == inputchoice.value);
                    Main.innerHTML= "";

                     encontrar.find((el)=>el.number == inputchoice.value ) || noexiste() //Operador logico OR

                     //Esto fue un poco un dolor de cabeza, no podia acceder a los valores del array y siempre daba undefined o vacio pero no me tomaba "encontrar === [] && noexiste()"
                     //por algun motivo, asi que me vi forzado a hacer esto.
                    
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
    //let recuperarLS = JSON.parse(localStorage.getItem('entry'))

    let recuperarLS = JSON.parse(localStorage.getItem('entry'))||[] //Operador logico OR (La verdad es que me dio la sensacion de que es un poco redundante usar OR aca)

    recuperarLS && recuperarLS.forEach(el=> {aarray.push(el);}) //Operador logico AND

    // if(recuperarLS){
    //     recuperarLS.forEach(el=> {
    //         aarray.push(el);
    //      })
    // }
}
   
   recuperar()
   buscar(aarray);
