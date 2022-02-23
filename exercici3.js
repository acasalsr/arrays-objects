// Treure els elements repetits d’un array.

/* 
1. Crear loop.
2. guardar element arr[i] a una varible
3. Comparar si aquest element n'hi ha alguna d'igual. Fer un altre loop per anar modificant l'array
*/

let arr = [5,3,3,9];
let arrRepetits = [];
let finalArray = [];
//arrRepetits = [3,3]

for (let i = 0; i < arr.length; i++){
  for (let j = 0; j < arr.length; j++){
    if(arr[j] === arr[i] && i != j){
      arrRepetits.push(arr[j]);
    }
  }
}
for (let x = 0; x < arr.length; x++) {
  for (let l = 0; l <arrRepetits.length; l++){
    if (arrRepetits[l] !== arr[x] && x !== l ){
      finalArray.push(arr[x]);
    }
  }
}
finalArray