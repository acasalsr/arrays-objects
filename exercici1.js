/* Donat un vector d’enters, 
comprovar el major, 
el menor i 
la mitjana de tots.
*/

let arr = [12, 56, 3, -3, 25, 6, 9, 8, 190, 10, 45, 67];
let contador = 1;
let numMax = 0;
let numMin = 0;
let suma = 0;
let mitjana = 0;
let pv = true;

for (let i = 0; i < arr.length; i++) {
  pv && (numMin = arr[i]);
  pv = false;
  arr[contador] > numMax && arr[contador] > arr[i] && (numMax = arr[contador]);
  arr[contador] < numMin && arr[contador] < arr[i] && (numMin = arr[contador]);
  suma = arr[i] + suma;
  contador++;
}
mitjana = suma / arr.length;

console.log(numMax);
console.log(numMin);
console.log(suma);
console.log(mitjana);
