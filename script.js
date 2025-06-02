//1 
let animales = ["perro", "gato", "conejo", "loro"];

for (let i = 0; i < animales.length; i++) {
    console.log(animales[i]);
    i++;
}

//2
for (let i = 0; i < animales.length; i++) {
  if (i % 2 === 0) {
    console.log(animales[i]);
  }
}

//3
let numeros = [4, 7, 2, 9, 5];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}

console.log("La suma es " + suma);

//4
let datos = [3, 6, 1, 8];
let resultado = [];

for (let i = 0; i < datos.length; i++) {
  resultado.push(datos[i] * 2);
}

console.log(resultado);

/*

let alumnos = ["Sofía", "Carlos", "Bruno", "Lucía", "Carla"];
let nombreBuscado = prompt("Ingresá un nombre para buscar en la lista de alumnos:");
if (alumnos.includes(nombreBuscado)) {
  console.log("✅ El nombre se encontró en la lista.");
} else {
  console.log("❌ El nombre no se encontró en la lista.");
}
*/
//6
let valores = [5, 0, 8, 0, 2];
let nuevoArreglo = valores.map(valor => valor === 0 ? 100 : valor);
console.log(nuevoArreglo);
//10?? En realidad 7

let notas = [8, 7, 9,  10, 6];
function calcularPromedio(notas) {
  let sumaNotas = 0;
  for (let i = 0; i < notas.length; i++) {
    sumaNotas += notas[i];
  }

console.log('El promedio de las notas es de '+sumaNotas/ notas.length);
}