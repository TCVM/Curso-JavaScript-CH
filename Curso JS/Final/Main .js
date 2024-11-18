let aarray = [];

let eliminate;
let  inputchoice = document.getElementById("choice"); 

const Main = document.getElementById("cuerpo");
const newentrada = document.getElementsByClassName('nueva-entrada')[0]
const newentry = document.getElementById("btnnueva");
const search = document.getElementById("search");
const principal= document.getElementById("principal");
const AMP = document.getElementsByClassName('visor-modal')[0]
const ver =document.getElementById("zoom");
const pregunta = document.getElementById("help");




function arranque(){
    newentry.onclick=()=>{nueva()};
    search.onclick=()=>{
        inputchoice.value == ""? buscar(aarray) : filtro(aarray); 
    };
    principal.onclick=()=>presentacion(); 
    pregunta.onclick=()=>ayuda();
    buscar(aarray); 
}

arranque();

function nueva(){ 
    let input3 = document.getElementById("img");
    let input1 = document.getElementById("title");
    let input2 = document.getElementById("core");
    const ok=document.getElementById("ok");
    ok.onclick=() =>validar(input1,input2,input3);
   

}


function validar(input1,input2,input3){
    (input1.value=="")||(input2.value=="")?error():agregar(input1,input2,input3) 
};



function error(){
    Swal.fire({
        title:"Error", text:"No hay titulo o cuerpo de la entrada!", icon: "error", confirmButtonText: "Continuar"
   })
};




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
                        <p><h2><strong>Un anotador para cuando necesitas guardar esas teorias conspirativas.</strong></h2></p>
                        <p><h6>Recomiendo fuertemente que pases por la pagina "ayuda" si es tu primera vuelta por la pagina.</h6></p>
                         <img src=https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wccftech.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fhalf-life-3-i-want-to-believe.jpg&f=1&nofb=1>
                         <p><strong>O cualquier otra cosa que te quieras acordar...</strong></p>
 `                      
 Main.appendChild(div);
 
}



function ayuda(){
    Main.innerHTML= ""
    let div = document.createElement('div')
 div.innerHTML += `
                        <p><h2><strong>AYUDA</strong></h2></p>
                        <p><h3>Idea</h3></p>
                        <p>La pagina web esta diseñada con el proposito de almacenar informacion corta en la forma mas breve y sencilla posible(por lo menos dentro de lo que mis capacidades lo permiten.) en una estructura permita verlos con comodidad y leerlos rapidamente. Como un post-it! Si! Lo adivinaste, bien hecho.</p>
                        <p><h3>Funciones</h3></p>
                        <p>Ahora mismo la pagina posee un sistema de almacenamiento y recuperacion de datos, una funcion para agregar entradas, una funcion de busqueda de datos particulares, una funcion para ampliar cualquiera de las entradas almacenadas para una mejor lectura y una funcion para eliminar entradas(se encuentra buscando una entrada en particular en el buscador o usando la funcion de ampliar.)</p>
                        <p><strong>Voy a proceder explicando aquellas funciones que, en mi opinion, lo requieran.</strong></p>
                        <p><h3>Titulo</h3></p>
                        <p>Darle un click al titulo devuelve a la "pagina principal".</p>
                        <p><h3>Eliminar</h3></p>
                        <img src=imagenes/Eliminar.png>
                        <p><h6>Eliminar 1</h6></p>
                        <img src=imagenes/Eliminar2.png>
                        <p><h6>Eliminar 2</h6></p>
                        <p><h3>Buscador</h3></p>
                        <p>El buscador solamente funciona ingresando el numero de id, esto se hizo asi porque me parecio mas sencillo que tener que escribir un titulo como "primer proyecto" sin faltas de ortografia. </p>
                        <p>Si apretas el boton "buscar" teniendo el buscador vacio devuelve todas las entradas cargardas en la pagina.</p>
                        <p><h3>Ejemplos</h3></p>
                        <p>No una funcion per se, los ejemplos estan ahi unicamente para cubrir ese objetivo, ejemplificar como se veria la pagina cargada con entradas. Si se agrega una nueva entrada van a ser eliminados hasta el proximo refresh de la pagina.</p>
                        <p><h3>No carga las imagenes</h3></p>
                        <p>Es necesario usar LiveServer para correrlas.</p>
                        <p><h3>Posdata de autor... supongo?</h3></p>
                        <p>En una nota mas personal, me parecio una buena idea tener una pagina que en la que pudiese guardar proyectos y poder usarla como portfolio algun dia quizas. Por ese mismo motivo tambien creo que es interesante la idea de dejar como ejemplo de posteo todos los desafios que hice durante el año. </p>
                        <img src=https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.fjcdn.com%2Fgifs%2FHow%2Bi%2Bdance%2Bat%2Bthe%2Bclub%2Bsimpsons_1c3db1_4668163.gif&f=1&nofb=1>
                        <p><h6>queria ver si funcionaban los gifs...</h6><p>
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
                        </div>
                            <button id="ampliar${ent.number}" class="boton-ampliar"><i class="fa fa-search-plus"></i></button>
                        </div>    
    `

    Main.appendChild(div);

    let btnAmpliar = document.getElementById(`ampliar${ent.number}`);
    btnAmpliar.addEventListener('click',()=>{ 
        visor(ent);

        AMP.classList.toggle('visor-active');
        console.log("asd");
    })
   });
}


function visor(ent){

    let{img,title,number,core,fecha}=ent;
        let div = document.createElement('div')
        div.classList.add('entryymodal')
     div.innerHTML += `
                             <img src=${img} >
                             <span >${title}</span>
                             <p>${number} </p>
                             <p>${core}</p>
                             <p> ${fecha}</p>
                         <button id="eliminar${number}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
     `
     ver.appendChild(div);
     let btnEliminar = document.getElementById(`eliminar${number}`);
     btnEliminar.addEventListener('click',()=>{ eliminar(number);AMP.classList.toggle('visor-active');div.remove()})
     const cerrado = document.getElementById('zoomCerrar');
     cerrado.addEventListener('click',()=>{ div.remove()})
    
};


function eliminar(number){
    aarray = aarray.filter(e=> e.number !=number);
    aarray.forEach(ent => {
        if(ent.number>number){ent.number--};                  
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
}

function noexiste(){ let div= document.createElement("div"); div.innerHTML= `<h1> ${"Not Found"} </h1>`; Main.appendChild(div) };

function fetchingit(){
    const pedir = async () => {
        const resp = await
    fetch('data.json') //Necesita LiveServer!!
        const data = await resp.json()


            data.forEach((pruebas)=>{aarray.push(new entrys(pruebas.title,pruebas.core,pruebas.fecha,pruebas.number,pruebas.img))});

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
