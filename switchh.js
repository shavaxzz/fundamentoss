var uno;
var dos;
var ganauno; 

var jugadoruno = prompt(" Jugador 1 elija una opcion para jugar \n R. ROCA \n P. PAPEL \n T. TIJERAS ") 
var jugadordos = prompt(" Jugador 2 elija una opcion para jugar \n R. ROCA \n P. PAPEL \n T. TIJERAS ") 



switch (jugadoruno) {
    case "R": uno ="ROCA";
        break;
    case "P": uno ="PAPEL";
        break;
    case "T": uno ="TIJERAS";
        break;
    default:
        break;
}

switch (jugadordos) {
    case "R": dos ="ROCA";
        break;
    case "P": dos ="PAPEL";
        break;
    case "T": dos ="TIJERAS";
        break;
    default:
        break;
}

switch (true) {
    case (uno =="ROCA" && dos == "TIJERAS"):
    juego = "R-T  Roca rompe Tijeras gana el juagador uno";
        break;
    case (uno =="ROCA" && dos == "PAPEL"):
    juego = "R-P  Papel tapa Roca gana el jugador dos";
        break;
    case (uno =="ROCA" && dos == "ROCA"):
    juego = "R-R  EMPATE";
        break; 
    case (uno =="TIJERAS" && dos == "PAPEL"):
    juego = "T-P  Tijeras corta  papel  gana el jugador uno";
        break;
    case (uno =="TIJERAS" && dos == "ROCA"):
    juego = "T-R  Roca rompe Tijera gana el juagador dos";
        break;
    case (uno =="TIJERAS" && dos == "TIJERAS"):
    juego = "T-T  EMPATE";
        break; 
    case (uno =="PAPEL" && dos == "ROCA"):
    juego = "P-R  Papel tapa Roca gana el jugador uno";
        break;
    case (uno =="PAPEL" && dos == "TIJERAS"):
    juego = "P-T  Tijeras corta  papel  gana el jugador dos";
        break;
    case (uno =="PAPEL" && dos == "PAPEL"):
    juego = "P-P  EMPATE";
        break; 
    default:
        break;
}


console.log(juego)

// una diculpa enserio esta parte de mi codigo nose subio, la aceptaria , de verdad no guarde los cambios
