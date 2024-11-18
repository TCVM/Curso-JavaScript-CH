/* Bueno aca estamos, 7 de la madrugada. Me tomo unos 3 o 4 dias terminar de hacer esto. Estoy exausto. Voy con lo importante: Como vas a notar muy rapido el codigo se apoya
   muchisimo en el codigo que desarrollo el tutor Emiliano(no me acuerdo su apellido) en el after de la clase 11 si no me equivoco. Tome practicamente todo lo que vi que me 
   servia y funcionaba, lo modifique e integre en mi programa. Tome muchas "buenas practicas" y otros trucos por ahi que la verdad es que me hicieron la vida mucho mas facil.
   Obviamente no pienso dejarlo con los mismo colores y planeo cambiarle un par de cosas a come se fue la pagina en un primer plano(ya le puse algunos detalles) pero no me da
   mas la vida como para hacerlo. Como siempre deje buena parte del codigo antiguo comentado abajo para comparar y tambien algunos puntos de comentarios para darle contexto a
   ciertas partes del codigo . Se que esto es un "espaghetti de codigo" probablemente pero tomo tanto tiempo y tuve que arreglar tantas cosas que iba era dificil que no
   terminara siendo el caso.  */

let aarray = [];

const Main = document.getElementById("cuerpo");

const newentry = document.getElementById("btnnueva");
const search = document.getElementById("search");

function arranque(){
    newentry.onclick=()=>{nueva()};
    search.onclick=()=>{filtro(aarray)};
    buscar(aarray); // aviso desde ya que la llamada a la funcion "buscar" se repite 20 millones de veces durante el codigo. No soy fan de ello pero era la unica manera de
                    //actualizar la pagina principal como respuesta a cada cambio que se da. No es optimo pero es dinamico y responsive y eso me agrada.
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
    //aarray.push(entry); 

}//los mayores problemas que tuve con esta funcion(nueva) se dieron en que el cuadro de dialogo aparecia sin fondo y no actualizaba sus datos cuando le daba el "OK".
 //Ese problema se sostuvo hasta el hoy, el ultimo dia. Hubo otros menores como que no quisiera cargar las imagenes pero nada que valga la pena mencionar.

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

//La protagonista. Recibe un llamado de practicamente cada rincon de codigo, no me dio ningun problema la verdad.

}
function eliminar(number){
    //aarray.splice(aarray.indexOf(number), 1);
    aarray = aarray.filter(e=> e.number !=number);
    localStorage.setItem('entry',JSON.stringify(aarray));
    buscar(aarray);    

/*esta funcion casi me hace agarrar un ataque de ansiedad hoy. Es la que mas tiempo tomo arreglar. Las cartas que muestran la pagina en un principio todas tenian un boton 
  eliminar encima ya en la pantalla principal, habia puesto ese array.splice de ahi y se suponia que con los aarray.number iba a ser capaz de indentificarlos y eliminarlos en 
  cualquier momento. NO FUE EL CASO. Cada vez que queria eliminar al elemento 1 eliminaba al elemento 3 y yo tenia que ponerme a mover cosas de lugar para ver si de alguna
   manera pudiese lograr que el indice funcionase como queria. Termino no eliminandose nada. Hice de todo. absolutamente de todo. Termine alucinando de tanto pensar en el tema.
   Lo solucione. Pasaron 4 horas. Empece con localstorage. OTRA VEZ EMPEZO A ELIMINAR EL NUMERO 3. Que miserable que es la vida a veces la verdad. Termine agarrando un fragmento 
   del codigo de Emiliano que usaba una manera alterna para eliminar un elemento particular de un array. Le debo mucho a ese sujeto. Mi cordura se mantiene gracias a el.*/  
}




function filtro(aarray){
    input1 = document.getElementById("choice");  

            //buscar(aarray.filter(el => el.number == input1.value)); 
            //input1.addEventListener('change',()=>{ 
                //Me encontre que el evento "change" en un input permite usar la tecla "enter" para mandar la informacion, lastima que da problemas
                
                if(input1.value == ""){
                    buscar(aarray);
                }else{
                    //buscar(aarray.filter(el => el.number == input1.value));
                    let encontrar = aarray.filter(el => el.number == input1.value);
                    Main.innerHTML= ""
    
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
             
 /*este fue el otro que sufrio una buena cantidad de cambios durante el proceso, emiliano tenia un select en su codigo y yo un input asi que tuve que encontrarle la vuelta,
   tomo un buen par de pruebas encontrar cual era el valor "default" de un input por ejemplo. Se suponia que durante el if si terminaba cayendo en el else iba a mandar
   el objeto en cuestion que se que requieria como paramentro de la funcion buscar. Pero todo el problema que la funcion eliminar paso asi que tome la decision de sacar todo
   lo relacionado al boton eliminar del buscar y lo traje para aca y junto con toda una copia del resto. No era lo mas optimo pero no se me ocurria otra cosa mas que aislar
   las cartas a una por instancia de "eliminacion". Osea, yo tenia la idea de que la eliminacion fallaba porque en algun punto el indice que indicaba cual era el objeto era 
   pisado por otra cosa. Asi que arme todo evento aparte en el que no hubiera chance de que fuera pisado de ninguna forma. Funciono por un rato.*/
}




function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('entry'))

    if(recuperarLS){
        recuperarLS.forEach(el=> {
            aarray.push(el);
         })
    }
}//nada que comentar de esta mas que me volvio loco y se bugueo mas de una vez con la carta de prueba que habia diseñado para la pagina. No paraba de repetirse.
   
   recuperar()
   buscar(aarray);



// let titulo = document.getElementById("titulo");
// titulo.innerHTML = "Estrutura de Datos Basica";
// class entrys{
//     constructor(title, core, fecha, number){
//         this.number = number;
//         this.core = core;
//         this.fecha = fecha;
//         this.title = title;
//     }

// }




//aarray.push(new entrys("asdasd","asd",this.fecha=new Date(),aarray.length+1,"Khe.jpg")); 
//localStorage.setItem('entry',JSON.stringify(aarray));

// Habia diseñado una prueba con la idea de que se pudiera ver desde el comienzo una primera carta que ya estuviese cargada en el array. Esta fue la carta que se negaba a ser
//eliminada de todas las formas posibles y se replico y a veces incluso fue imposible sacarla del localstorage. Fue una cosa de locos. Quedo un archivo .js con lo que considero
//fue el intento mas cercano a hacerla funcionar de forma estable con el resto de las cartas y el sistema storage.




    // let opciones = '';
    // aarray.forEach((num) =>{opciones+=(num.number)+') '+(num.title)+'\n' });
    // if(aarray.length>=1){
    //     let div2 = document.getElementById("opciones");
    //     div2.innerHTML += `<h1>${'ingrese el numero de una de las siguientes opciones\n '}</h1>
    //                        <h2>${opciones}</h2>`;
    //     document.body.append(div2);
    //     let input3 = document.getElementById("choice");
    //     let boton3 = document.getElementById("btn3");
    //     let boton4 = document.getElementById("btn4");
    //     boton3.onclick=()=>{ok(input3.value)};
    //     boton4.onclick=()=>{eliminar(input3.value)}
    // }
    // else{
    //     let parrafo = document.createElement("p");
    //     parrafo.innerHTML = "<h2>no hay entradas</h2>"
    //     document.body.append(parrafo);

    
    //}


   //     </div>
//     <button id="eliminar${ent.number}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
// </div>
    // let btnEliminar = document.getElementById(`eliminar${ent.number}`);
    // btnEliminar.addEventListener('click',()=>{ eliminar(ent.number)

        // let parrafo2 = document.createElement("p2");
        // parrafo2.innerHTML = "<h2>Elemento Eliminado</h2>"
        // document.body.append(parrafo2);
    //})
// function ok(){
//         //    const resultado = aarray.find((el)=>el.number == choice);
//         //    let div = document.createElement("div");
//         //    div.innerHTML += `<h1>${resultado.title}</h1>
//         //                     <h2>${resultado.core}</h2>
//         //                     <h5>${resultado.fecha}</h5>`;
//         //    document.body.append(div);  
//          }

  // })
   // function eliminar(choice){
//     const resultado = aarray.find((el)=>el.number == choice); 
//     aarray.splice(aarray.indexOf(resultado), 1);
//     let parrafo2 = document.createElement("p2");
//     parrafo2.innerHTML = "<h2>Elemento Eliminado</h2>"
//     document.body.append(parrafo2);

 //}