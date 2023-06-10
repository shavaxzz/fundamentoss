var frase = prompt("Ingrese la frase");

function palindromo(frase) {
let fraseUno  = frase.split("");
let fraseDos  = fraseUno.reverse().join("");

if (frase == fraseDos ) {
return "Efectivamente es un palindromo";
}
else{
return "No es un palindromo ";
} 
 }
console.log(palindromo(frase))

function primera(frase) {
let primeraLetra = frase[0];
console.log(primeraLetra)

let mitad = Math.round(frase.length / 2) -1;


console.log(frase.charAt(mitad));

}

(primera(frase));
