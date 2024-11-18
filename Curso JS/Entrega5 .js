/*Bueno, esta vez hice cambios bastante importantes dentro de la estructura del programa, ahora en vez de ofrecer al usuario opciones por cada accion que realiza directamente va a tener a mano la posibilidad
de realizar cualquier accion en cualquier momento. Los prompt fueron reemplazados por inputs y botones, los alert fueron reemplazados por <div> y <p>. Modularice mas para hacerlo mas legible. Deje comentado
el codigo antiguo para que sea mas facil comparar los cambios.*/
let titulo = document.getElementById("titulo");
titulo.innerHTML = "Estrutura de Datos Basica";
class entrys{
    constructor(title, core, fecha, number){
        this.number = number;
        this.core = core;
        this.fecha = fecha;
        this.title = title;
    }
    /*alerta(){
        alert(this.core);
        alert(this.fecha);
    }*/ 
    
    //obsoleto
}

const aarray = [];
function arranque(){
    //let quit= false;//ya no es necesario un 'fin del programa'. Obsoleto.
    
     let boton1 = document.getElementById("btn1");
    boton1.onclick=()=>{nueva()};
     let boton2 = document.getElementById("btn2");
    boton2.onclick=()=>{buscar()};

    /*do{
    let choice1= prompt('ingrese el numuero de una de las siguientes opciones\n 1)ingresar nueva entrada.\n2)buscar entrada.\n3)salir');
    switch(choice1) {
        case '1':
                nueva();
                break;
        case '2': 
                buscar();
                break;
        case '3':
                quit=true;
                break;
        default:
            alert('error');
            break;
    }
    }while(quit==false);*/  

    //El switch servia como una aproximacion un menu mas 'amigable', ahora que existe la opcion de dar las opciones en pantalla quedo obsoleto tambien. El do-while estaba ligado al 'fin del programa' asi que lo mismo.
}
function nueva(){
    let input1 = document.getElementById("title");
    let input2 = document.getElementById("core");
    let entry = new entrys(input1.value,input2.value,this.fecha=new Date(),aarray.length+1);
    aarray.push(entry);
   /* let entry = new entrys(prompt('ingrese titulo'),prompt('ingrese entrada/dato'),this.fecha = new Date(),aarray.length+1);
    alert('nueva entrada guardada en indice: '+entry.number);
    aarray.push(entry);*/
    
    //la unica modificacion que ocurrio aca fue el cambio de los prompts a inputs
}
function buscar(){ 
    let opciones = '';
    aarray.forEach((num) =>{opciones+=(num.number)+') '+(num.title)+'\n' });
    if(aarray.length>=1){
        let div2 = document.getElementById("opciones");
        div2.innerHTML += `<h1>${'ingrese el numero de una de las siguientes opciones\n '}</h1>
                           <h2>${opciones}</h2>`;
        document.body.append(div2);
        let input3 = document.getElementById("choice");
        let boton3 = document.getElementById("btn3");
        let boton4 = document.getElementById("btn4");
        boton3.onclick=()=>{ok(input3.value)};
        boton4.onclick=()=>{eliminar(input3.value)}
    }
    else{
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "<h2>no hay entradas</h2>"
        document.body.append(parrafo);
        //alert('no hay entradas'); //paso a ser un <p>
    }
    
}
function ok(choice){
        //let choice = prompt('ingrese el numero de una de las siguientes opciones\n'+opciones); //no mas promp, ahora <div>
           const resultado = aarray.find((el)=>el.number == choice);
           let div = document.createElement("div");
           div.innerHTML += `<h1>${resultado.title}</h1>
                            <h2>${resultado.core}</h2>
                            <h5>${resultado.fecha}</h5>`;
           document.body.append(div);
           //resultado.alerta(); //los metodos se me quedaron obsoletos en este programa sorprendentemente.

         }
function eliminar(choice){
    const resultado = aarray.find((el)=>el.number == choice); 
    aarray.splice(aarray.indexOf(resultado), 1);
    let parrafo2 = document.createElement("p2");
    parrafo2.innerHTML = "<h2>Elemento Eliminado</h2>"
    document.body.append(parrafo2);
    /*let choice= prompt('Eliminar entrada?si/no');     //como ahora es directamente un boton ya no hace falta un if y ni un prompt claramente.
    if(choice2=='si'){
        aarray.splice(aarray.indexOf(resultado), 1);
       alert('entrada eliminada');
    }*/
        //alert('Informacion va a aparecer en pantalla al cerrar el programa'); //esta era una solucion hecha para compensar la incapacidad de mostrar datos de html en la version anterior en real-time.
    //}   
}
arranque();  