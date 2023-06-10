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