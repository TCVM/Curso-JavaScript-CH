let consol =prompt("consola abierta? si/no");
if(consol == "si"){
do {

alert("ayer me lei un comic de 260 paginas. Voy a aprovechar para ventilar aca.");
for (let i = 1; i <= 260; i ++){
    if((i != 50) && (i != 102) && (i != 127) && (i != 150) && (i != 200) && (i != 260)){
        console.log("...");
    }else{
        let now = Date.now();
        switch (i){
            case 50:
                console.log("Cap 50. Bueno, se cae un poco a pedazos pero el arte esta bien y la historia mas o menos engancha");
                console.log("Estabilidad Mental:",+SANIDAD,"%");
                end = now + 3000;
                while (now < end) { now = Date.now(); }
                
                break;
            case 102:
                console.log("Cap 102. Esto es un desastre, por algun motivo el autor esta escribiendo al protagonista como la persona mas densa e irracional de la faz de la tierra, la historia perdio complemamente su esencia, paso de ser una historia de deportes a un triangulo amoroso????? , las situaciones no tienen ninguna cohecion.");
                console.log("Estabilidad Mental:",+SANIDAD,"%");
                now = Date.now();
                end = now + 3000;
                while (now < end) { now = Date.now(); }
                break;
            case 127:
                console.log("Cap 127. Esto se esta volviendo insufrible de a ratos. Todavia tengo fe. Capaz en una de esas el autor deja de estirar plots al infinito y deja de meter personajes toxicos por todos lados");
                console.log("Estabilidad Mental:",+SANIDAD,"%");
                now = Date.now();
                end = now + 3000;
                while (now < end) { now = Date.now(); }
                break;
            case 150:
                console.log("Cap 150. Por favor, basta");
                console.log("Estabilidad Mental:",+SANIDAD,"%");
                now = Date.now();
                end = now + 3000;
                while (now < end) { now = Date.now(); }
                break;
            case 200:
                console.log("Cap 200. Sobrevivi hasta aca, ya no tendria sentido dejarlo cuando estoy tan cerca del final. No me cabe en la cabeza como alguien puede haber destruido de esta manera una base con tanto potencial. El autor decidio que el mejor curso de accion era que el protagonista rechazara sin ningun motivo al interes amoroso, asi que ahora se viene un arco de arrepentimientos. Todo muy sano.");
                console.log("Estabilidad Mental:",+SANIDAD,"%");
                now = Date.now();
                end = now + 3000;
                while (now < end) { now = Date.now(); }
                break;
            case 260:
                console.log("Cap 260. El interes amoroso se fue a viajar por el mundo y el prota entro en estado depresivo, alguien se le acerco y le dice 'ahora mismo esta en tal lado, llegas en 3 horas si vas bondi(ponele). Entoces el protagonista super decidido.... espera 3 meses sin hacer absolutamente nada para ir... OH, PERO FINALMENTE, UUUUH SE VIENE EL FINAL, EL FUE Y SE ENCUENTRAN Y ES TODO ESPECIAL Y FELIZ Y AUNQUE ODIES TODO EL TRAYECTO CON CADA FIBRA DE TU CUERPO POR LO MENOS EL FINAL, SI EL FINAL LOGRA HACER UN BUEN CIERRE DE ESTA SERIE DE EVENTOS DESAFORTUNADOS VA A VALER UN POQUITITO BIEN CHIQUITO MAS LA PENA. SE ACERCAN PARA PORFIN LLEGAR A LA CUMBRE DE ESTOS MUGROSOS 260 CAPITULOS, ESTAN A PUNTO DE CERRAR YYYYYY..............un ladron pasa corriendo y le roba la mochila al interes amoroso ...... y fin...........................................................por que......autor, por favor....... por que... ");
                console.log("Estabilidad Mental:",+SANIDAD,"%");
                now = Date.now();
                end = now + 3000;
                while (now < end) { now = Date.now(); }
                break;  
        }
    }
SANIDAD= (((260-i)*100)/260).toFixed(0);
}

rellenorepeat = false;
condicion=prompt("Si queres volver a acompaniarme una vez mas en esta triste aventura, ingresa 'si'(queria poner un while )"); 
if(condicion == "si"){ rellenorepeat=true;console.clear()};
} while (rellenorepeat!=false);
}else{
    //Por algun motivo cuando uso el codigo para manipular el tiempo de ejecucion parece que tambien afecta el resto del navegador y no permite interactuar hasta que termina
    //de ejecutarse el  codigo, la condicion de consola abierta es un "workaround" de esto, no creo que sea lo mas efectivo pero no tengo idea como evitar que el codigo se ejecute
    //inmediatemente y a la vez evitar que se trabe el navegador.
    alert("abrir la consola");
}
