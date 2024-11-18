

let aarray = [];

let eliminate;
let  inputchoice = document.getElementById("choice"); 

const Main = document.getElementById("cuerpo");
const newentrada = document.getElementsByClassName('nueva-entrada')[0]
const newentry = document.getElementById("btnnueva");
const search = document.getElementById("search");
const principal= document.getElementById("principal");


function arranque(){
    newentry.onclick=()=>{nueva()};
    search.onclick=()=>{
        inputchoice.value == ""? buscar(aarray) : filtro(aarray); 
    };
    principal.onclick=()=>presentacion(); 
    buscar(aarray); 
}

arranque();

function nueva(){ 
    let input3 = document.getElementById("img");
    let input1 = document.getElementById("title");
    let input2 = document.getElementById("core");
    const ok=document.getElementById("ok");
    ok.onclick=() =>agregar(input1,input2,input3); 
   

}
function agregar(input1,input2,input3){
    eliminarprueba(eliminate);
    aarray.push(new entrys(input1.value,input2.value,this.fecha=new Date(),aarray.length+1,input3.value));
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
    aarray.forEach(ent => {
        if(ent.number>number){ent.number--};
        //Me di cuenta de que habia un bug cuando eliminaba archivos y despues creando nuevos. Basicamente podia pasar de que hubiese varios
                                       //con el mismo identificador, asi que esto fue lo que se me ocurrio. Dato innecesario, esta idea se me ocurrio tirado en la cama
                                       //el sabado a las 8 de la mañana despues de 40 minutos de haberle dado vueltas. Vaya a saber uno porque me puse a pensar como resolverlo
                                       //ni bien me desperte.                               
    })
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
    }).showToast();

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
            
             
}

function eliminarprueba(){
    aarray = aarray.filter(e=> e.fecha !="NOW");
    localStorage.setItem('entry',JSON.stringify(aarray));
}//no me quedo otra mas que armar un eliminar aparte para poder deshacerme de la prueba para que no se repita y que no altere los id de las otras entradas.

function noexiste(){ let div= document.createElement("div"); div.innerHTML= `<h1> ${"Not Found"} </h1>`; Main.appendChild(div) };

function fetchingit(){
    const pedir = async () => {
        const resp = await
    fetch('data.json') //Necesita LiveServer!!
        const data = await resp.json()

        // .then( (res) => res.json())
        // .then((data)=> {
            data.forEach((pruebas)=>{aarray.push(new entrys(pruebas.title,pruebas.core,pruebas.fecha,pruebas.number,pruebas.img))});
        //}) 
    }
    pedir();
}

function recuperar() {
    
    let recuperarLS = JSON.parse(localStorage.getItem('entry'))||[];

    recuperarLS && recuperarLS.forEach(el=> {aarray.push(el);});

};
   presentacion();
   fetchingit();
   recuperar();
