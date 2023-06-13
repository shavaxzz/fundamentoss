function ecuacion(a, b, c) {
  let segundo = b * b - 4 * a * c;

  if (segundo > 0) {
    let x1 = (-b + Math.sqrt(segundo)) / (2 * a);
    let x2 = (-b - Math.sqrt(segundo)) / (2 * a);
    return [x1, x2];
  } else if (segundo === 0) {
    let x = -b / (2 * a);
    return [x];
  } else {
    return false;
  }
}

let a = prompt("Ingrese a");
let b = prompt("Ingrese b");
let c = prompt("Ingrese c");

let solucion = ecuacion(a,b,c);
if (solucion === false) {
  console.log("No existen soluciones.");
} else if (solucion.length === 1) {
  console.log("Solo tiene una solcuion:", solucion[0]);
} else {
  console.log("Tiene 2 soluciones", solucion[0], solucion[1]);
}