/*El programa no tiene muchos cambios como tal mas que la inclusion de un titulo y el registro del momento exacto en el que se ingreso una entrada. Todo el resto son "optimizaciones" o una reescritura de las
operaciones basicas utilizando funciones mas especializadas. Queria usar las funciones "filter" y "sort" porque considero que hubieran cerrado muy bien con la naturaleza del programa pero creo que no hubieran quedado
 muy bien usando "promp" y "alert" para expresar la opciones. Deje el codigo antiguo para que sea mas facil seguir los cambios. Pienso agregarle mas funciones cuando pueda integrarlo con html. */

class entrys{
    constructor(title, core, fecha, number){
        this.number = number;//index
        this.core = core;//cuerpo
        this.fecha = fecha;
        this.title = title;
        //this.entry = entry;
        //agregue titulo, fecha y numero, cambie la variable que antes de llamaba "entry" a core asi no overlapeaba con la asignacion del construtor mas abajo
    }
    //fechahoy(){ 
      //  this.fecha = new Date()
    //}
    alerta(){
        alert(this.core);
        alert(this.fecha);
    }
}
const aarray = [];
function arranque(){
    let quit= false;
    do{
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
    }while(quit==false);   
}
function nueva(){
    let entry = new entrys(prompt('ingrese titulo'),prompt('ingrese entrada/dato'),this.fecha = new Date(),aarray.length+1);
    alert('nueva entrada guardada en indice: '+entry.number);
    aarray.push(entry);
    
    //let entry = new entrys(prompt('ingrese entrada/dato'));  
    //entry.fechahoy();
    //entry.number = aarray.length+1;
    //alert(entry.number);
    //alert(aarray.length-1);
}
function buscar(){
    let opciones = '';
    /*for (let index =0; index < aarray.length;index++){
        opciones+=index+')\n'
    }*/
    aarray.forEach((num) =>{opciones+=(num.number)+') '+(num.title)+'\n' });

    if(aarray.length>=1){
        let choice = prompt('ingrese el numero de una de las siguientes opciones\n'+opciones);
           const resultado = aarray.find((el)=>el.number == choice);
           resultado.alerta();
          //aarray[choice].alerta();  
        let choice2= prompt('Eliminar entrada?si/no');
        if(choice2=='si'){
            aarray.splice(aarray.indexOf(resultado), 1);
           //aarray.splice(choice, 1);
           alert('entrada eliminada');
         }
    }
    else{
        alert('no hay entradas');
    }
}
arranque();  