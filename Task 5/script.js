/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintinį.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */
"use strict";

const users = [
  { id: "1", name: "John Smith", age: 20, hasDog: true },
  { id: "2", name: "Ann Smith", age: 24, hasDog: false },
  { id: "3", name: "Tom Jones", age: 31, hasDog: true },
  { id: "4", name: "Rose Peterson", age: 17, hasDog: false },
  { id: "5", name: "Alex John", age: 25, hasDog: true },
  { id: "6", name: "Ronald Jones", age: 63, hasDog: true },
  { id: "7", name: "Elton Smith", age: 16, hasDog: true },
  { id: "8", name: "Simon Peterson", age: 30, hasDog: false },
  { id: "9", name: "Daniel Cane", age: 51, hasDog: true },
];

/** Objektu masyvo filtravimas pagal objekto lauka "hasDog"
 *
 * @param {*} arr objektu, kuriame yra laukas pavadintas "hasDog" masyvas
 * @returns objektu, kuriame laukas pavadintas "hasDog" turi verte "true" masyvas
 */
function filterDogOwers(arr) {
  const dogOwners = arr.filter((e) => e.hasDog === true);
  return dogOwners;
}

const usersWithDogs = filterDogOwers(users);
console.log("usersWithDogs ===", usersWithDogs);

/** Objektu masyvo filtravimas pagal objekto lauka "age"
 *
 * @param {*} arr objektu, kuriame yra laukas pavadintas "age" masyvas
 * @returns objektu, kuriame lauko pavadinto "age"  verte yra lygi ar didesne nei 18, masyvas
 */

function filterAdults(arr) {
  const adults = arr.filter((e) => e.age >= 18);
  return adults;
}

const usersAdults = filterAdults(users);
console.log("usersAdults ===", usersAdults);
