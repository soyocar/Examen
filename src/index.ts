import "./styles.css";

function cargarAleatorio(): number {
  return Math.floor(Math.random() * 100);
}

function cargarArreglo(numeroArreglo: number[], dimensionArreglo: number) {
  let indice: number;
  for (indice = 0; indice < dimensionArreglo; indice++) {
    numeroArreglo[indice] = cargarAleatorio();
  }
}

function mostrarArreglo(numeroArreglo: number[], dimensionArreglo: number) {
  let indice: number;
  let linea: string = "";
  for (indice = 0; indice < dimensionArreglo; indice++) {
    linea += ` ${numeroArreglo[indice]}`;
  }
  console.log(linea);
}

function obtenerMenor(numArreglo: number[], dimArreglo: number): number {
  let menor: number = 0;
  let indice: number = 0;
  let auxiliar: number = numArreglo[indice];
  for (indice = 1; indice < dimArreglo; indice++) {
    if (numArreglo[indice] < auxiliar) {
      auxiliar = numArreglo[indice];
    }
  }
  menor = auxiliar;
  return menor;
}

let numMenor: number = 0;
let dimArreglo: number = Number(prompt(`Indique la dimension del arreglo: `));
let numArreglo: number[] = new Array(dimArreglo);
cargarArreglo(numArreglo, dimArreglo);
mostrarArreglo(numArreglo, dimArreglo);
numMenor = obtenerMenor(numArreglo, dimArreglo);
console.log(`El menor valor del arreglo es: ${numMenor}`);
