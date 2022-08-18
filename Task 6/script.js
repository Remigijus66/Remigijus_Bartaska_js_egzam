/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */
"use strict";
console.log("script.js");

const users = [
  { id: "1", name: "John Smith", age: 20 },
  { id: "2", name: "Ann Smith", age: 24 },
  { id: "3", name: "Tom Jones", age: 31 },
  { id: "4", name: "Rose Peterson", age: 17 },
  { id: "5", name: "Alex John", age: 25 },
  { id: "6", name: "Ronald Jones", age: 63 },
  { id: "7", name: "Elton Smith", age: 16 },
  { id: "8", name: "Simon Peterson", age: 30 },
  { id: "9", name: "Daniel Cane", age: 51 },
];

/**Apskaiciuoja ir grazina visu masyvo elementu,kurie yra objektai, lauko  "Key=age" verciu vidurki
 *
 * @param {*} arr objektu, kuriame yra laukas pavadintas "age" masyvas
 * @returns visu masyvo objektu lauku "key=age"  vidurki
 */
function getUserAverageAge(arr) {
  const average = arr.reduce((avg, current) => {
    return avg + current.age / arr.length;
  }, 0);
  return average;
}
const vidurkis = getUserAverageAge(users);
console.log("vidurkis.toFixed(2) ===", vidurkis.toFixed(2));

/** Grazina masyva, visu masyvo elementu,kurie yra objektai, lauko  "Key=name" sarasa
 *
 * @param {\} arr objektu, kuriame yra laukas pavadintas "name" masyvas
 * @returns masyva, visu masyvo objektu lauku "key=name"  sarasa
 */
function getUsersNames(arr) {
  const names = arr.map((e) => e.name);
  return names;
}

const vardai = getUsersNames(users);
console.log("vardai ===", vardai);
