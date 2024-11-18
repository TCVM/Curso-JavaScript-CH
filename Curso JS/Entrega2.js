/*let quit= false;
do{
    function arranque (quit) {
        let exit = false;
        let choice1 = prompt("Aca vamos una vez en una de estas desopilantes entregas, esto va a ser algo asi como esos rpg viejos en los que tenias que elegir tu camino. porque no.se.me.ocurre.nada.mejor. Asi que!--- hablemos (Eligi entre = hola; desopilante; final; vacaciones; juego; facultad; salir; y ,,, no se me ocurre mas nada)");
        do{
        switch(choice1){
            case "hola":
                alert("hola");
                choice1 =prompt ("alguna otra cosa? Es gratis!: hola; desopilante; final; vacaciones; juego; facultad; salir");
                break;
            case "desopilante":
                alert("adj. Comico, muy divertido, que causa mucha risa. De nada");
                choice1 =prompt ("proba otra cosa, yo invito!: hola; desopilante; final; vacaciones; juego; facultad; salir");
                break;
            case "final":
                final(quit)
                exit = true;
                break;
            case "vacaciones":
                vacaciones(quit)
                exit = true;
                break;
            case "juego":
                juego(quit)
                exit = true;
                break;
            case "facultad":
                facultad(quit)
                exit = true;
                break;
            case "salir":
                alert("D:");
                exit = true;
                quit=true;
                break;
            default:
            alert("O escribiste mal algo(no me voy a volver loco haciendo el programa case-sensitive) o pusiste directamente cualquier otra cosa, en ese caso: mira! hice una condicion para evitar que te caigas del programa, de verias estar orgulloso!");
            choice1 =prompt ("Como sea, aca tenes las opciones otra vez: hola; desopilante; final; vacaciones; juego; facultad; salir");
            break;
        }
        }while (exit==false);
        return quit;
    }
    function facultad(quit){
        alert("no hay mucho que contar realmente, arranco hace relativamente poco, va bastante tranqui, volver a la presencialidad estuvo mejor de lo que creia. Hay mucha gente dando vuelvas, los centros de estudiantes de estan matando, tengo un profesor de mates pelado que le gusta hacer voces cuando lee las fotocopias, un crack");
        let choice5= prompt("de aca podes saltar del vuelta al 'main menu' o podes conectar con los otros temas o salir o te estiro una opcion nueva, la eleccion es tuya: menu; final; vacaciones; juego; salir; youtube; ");
        let exit = false;
        do{
            switch(choice5){
                case "menu":
                 arranque(quit)
                 exit = true;
                 break;
                case "final":
                 final(quit)
                 exit = true;
                 break;
                case "vacaciones":
                  vacaciones(quit)
                 exit = true;
                 break;
                case "juego":
                  juego(quit)
                    exit = true;
                break;    
                 case "salir":
                    alert("D:");
                    exit = true;
                    quit=true;
                    break;
                case "youtube":
                        youtube(quit)
                     exit = true;
                     break;
                 default:
                    alert("O escribiste mal algo(no me voy a volver loco haciendo el programa case-sensitive) o pusiste directamente cualquier otra cosa, en ese caso: mira! hice una condicion para evitar que te caigas del programa, de verias estar orgulloso!");
                    choice5 =prompt ("Aca tenes las opciones otra vez:menu; final; vacaciones; juego; salir; youtube; ");
                    break;
            }
            
        }while (exit==false);
    }
     function final(quit){
        alert("No es estoy muy seguro de que va ser mi proyecto final, el problema como tal no es hacerlo, el problema es el tema, hoy estuve alrededor de 3 horas pensando que hacer con este trabajo porque no se si es o no la base de el proyecto asi que empece a considerar ideas como 'y si hago una pagina que se encargue de comparar y presentar posibles armas que el jugador puede usar en el elden ring(tiene 300 armas por cierto) y capaz me puedo agregar un apartado de jefes para molestar no mas y cosas asi, el tema seria implementar un buscador y tener que hacer una estructura de objetos para cada arma asi despues puedo hacer las comparativas y bueno, es posible, una locura pero posible, capaz se me va un toque la mano");
        let choice4= prompt("podes volver al 'main menu' o podes ir a  otros temas o salir, nop no hay opcion nueva en esta :menu; facultad; vacaciones; juego; salir;");
        let exit = false;
        do{
            switch(choice4){
                case "menu":
                 arranque(quit)
                 exit = true;
                 break;
                case "vacaciones":
                  vacaciones(quit)
                 exit = true;
                 break;
                case "juego":
                  juego(quit)
                    exit = true;
                    break;
                 case "salir":
                    alert("D:");
                    exit = true;
                    quit=true;
                    break;
                case "facultad":
                    facultad(quit)
                    exit = true;
                    break;
                 default:
                    alert("O escribiste mal algo(no me voy a volver loco haciendo el programa case-sensitive) o pusiste directamente cualquier otra cosa, en ese caso: mira! hice una condicion para evitar que te caigas del programa, de verias estar orgulloso!");
                    choice4 =prompt ("Aca tenes las opciones otra vez: menu; facultad; vacaciones; juego; salir; ");
                    break;
            }
        }while (exit==false);

    }

     function vacaciones(quit){
        alert("Me fui a lo de mi prima el finde pasado... creo. Tiene una de estas casa-quintas con un terreno bastante generoso y una laguna. Tuve a mi sobrino(hijo de prima), teprado literalmente a la espalda todo el fin de semana, pesa como 30 kg asi que no hacia mucha diferencia. Si hubo diferencia cuando el primo de mi sobrino aparecio por la casa y mi sobrino no tuve mejor idea que hacerme levantarlo a el tambien (50 - 60kg), logre correr un tramo con el pibe encima y despues me cai y se la dio en la nuca, nos reimos bastante, no te voy a enganiar, es bastante malcriado y mal hablado(sigue vivo, no fue nada grave. no te preocupes).");
        let choice3= prompt("opciones! esas cosas que a todo el mundo quiere pero en el momento en el que las tiene se agobia...... queres una calculadora? por las risas: menu; final; facultad; juego; salir; calculadora; ");
        let exit = false;
        do{
            switch(choice3){
                case "menu":
                    arranque(quit)
                    exit = true;
                    break;
                case "final":
                 final(quit)
                 exit = true;
                 break;
                case "juego":
                  juego(quit)
                    exit = true;
                    break;
                 case "salir":
                    alert("D:");
                    exit = true;
                    quit=true;
                    break;
                case "facultad":
                    facultad(quit)
                     exit = true;
                    break;
                    case "calculadora":
                        calculadora(quit)
                         exit = true;
                        break;
                 default:
                    alert("O escribiste mal algo(no me voy a volver loco haciendo el programa case-sensitive) o pusiste directamente cualquier otra cosa, en ese caso: mira! hice una condicion para evitar que te caigas del programa, de verias estar orgulloso!");
                    choice3 =prompt ("una vez mas, me encanta que exista el copy-paste :menu; final; facultad; juego; salir; calculadora; ");
                    break;
                }

        }while (exit==false);

    }
        function juego(quit){
            alert("estuve jugando Elden Ring los ultimos dos meses mas o menos, todavia no lo termine, es enorme, es hermoso, es adictivo y lo odio. Pero tambien lo amo. Excelente juego excelente calidad. Anoche uno de los personajes que era una vasija hablante llego al final de su historia y me pidio tener un duelo.            Despues exloto porque si. Fue todo bastante tragico la verdad. Alexander la vasija guerrera no sera olvidado");
            let choice2= prompt("Sabias que gastamos muchisima energia diariamente en el momento en el que tomamos las decisiones mas simples? considerar cuesta trabajo. Nuestro cerebro esta diseniado para optimizar la vida al maximo, por eso somos animales de rutina, para evitar tener enfrentarnos a cosas como estas: menu; final; facultad; vacaciones; salir; ");
            let exit = false;
            do{
                switch(choice2){
                    case "menu":
                        arranque(quit)
                        exit = true;
                        break;
                    case "final":
                     final(quit)
                     exit = true;
                     break;
                     case "salir":
                        alert("D:");
                        exit = true;
                        quit=true;
                        break;
                    case "facultad":
                        facultad(quit)
                         exit = true;
                        break;
                    case "juego":
                        juego(quit)
                            exit = true;
                            break;
                    case "vacaciones":
                        vacaciones(quit)
                        exit = true;
                        break;
                     default:
                        alert("O escribiste mal algo(no me voy a volver loco haciendo el programa case-sensitive) o pusiste directamente cualquier otra cosa, en ese caso: mira! hice una condicion para evitar que te caigas del programa, de verias estar orgulloso!");
                        choice2 =prompt ("felicidades llegaste a la parte secreta del programa en la que tenes ganas un premio, claramente  el giro del argumento es que el verdadero premio es el libre albedrio conferido a tu persona para poder elegir una de las siguientes opciones :menu; final; facultad; vacaciones; salir;  ");
                        break;
                    }
    
            }while (exit==false);

        }
            function youtube(quit){
                alert("Ahora mismo estoy escuchando Foo Fighters, https://www.youtube.com/watch?v=YDVAQI-4lto, este tema, si estas interesado. Antes de ayer su baterista murio en Bogota. Por algun motivo me golpeo emocionalmente mas de lo que esperaba. Es mi grupo favorito asi que estoy sientiendo mucha pena por todo el tema, es como si supiera que ya no va a volver a ser igual, el grupo probablemente no siga tocando y si toca no va a ser lo mismo sin el asi que nada, es bastante triste.");
                let choice6= prompt("no hay chiste de decisiones en esta, se puso un poco bajon la cuestion : menu; final; facultad; vacaciones; salir; ");
                let exit = false;
                do{
                    switch(choice6){
                        case "menu":
                            arranque(quit)
                            exit = true;
                            break;
                        case "final":
                         final(quit)
                         exit = true;
                         break;
                         case "salir":
                            alert("D:");
                            exit = true;
                            quit=true;
                            break;
                        case "facultad":
                            facultad(quit)
                             exit = true;
                            break;
                        case "vacaciones":
                            vacaciones(quit)
                            exit = true;
                            break;
                         default:
                            alert("O escribiste mal algo(no me voy a volver loco haciendo el programa case-sensitive) o pusiste directamente cualquier otra cosa, en ese caso: mira! hice una condicion para evitar que te caigas del programa, de verias estar orgulloso!");
                            choice6 =prompt ("opciones :menu; final; facultad; vacaciones; salir;  ");
                            break;
                        }
        
                }while (exit==false);
        
            }


            function calculadora(quit){
                alert("Ya sabes como funciona esto ");
                let flag = "si";
                do{
                    let a= prompt("INGRESA UN NUMERO! ");
                    let b= prompt("INGRESA OTRO, OTROOOO ");
                    const suma = function(a,b) { return a+b};
                    const resta = function(a,b){return a - b};
                    const multiplicacion = function(a,b)  { return a * b};
                    const division = function (a,b)  {return a / b};
                    alert("suma, resta, multiplicacion, division")
                    alert(suma(a,b));
                    alert(resta(a,b));
                    alert(multiplicacion(a,b));
                    alert(division(a,b));
                    flag= prompt("otra? si/no");
                }while(flag != "no");
 
                let choice7= prompt("sabes que tienen en comun un cuervo y un escritorio? te aseguro que esta referencia no tiene copyright alguno : menu; final; facultad; vacaciones; salir; ");
                let exit = false;
                do{
                    switch(choice7){
                        case "menu":
                            arranque(quit)
                            exit = true;
                            break;
                        case "final":
                         final(quit)
                         exit = true;
                         break;
                         case "salir":
                            alert("D:");
                            exit = true;
                            quit=true;
                            break;
                        case "facultad":
                            facultad(quit)
                             exit = true;
                            break;
                        case "vacaciones":
                            vacaciones(quit)
                            exit = true;
                            break;
                         default:
                            alert("O escribiste mal algo(no me voy a volver loco haciendo el programa case-sensitive) o pusiste directamente cualquier otra cosa, en ese caso: mira! hice una condicion para evitar que te caigas del programa, de verias estar orgulloso!");
                            choice7 =prompt ("opciones :menu; final; facultad; vacaciones; salir;  ");
                            break;
                        }
        
                }while (exit==false);
        
            }

arranque(quit)
}while (arranque == false);*/
