/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
"use strict";

const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};
/**
 *  funkcija kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
 * @param {*} object
 * @returns {*} visu objekto "key" masyvas
 *  
 */

function showObjectKeys(object) {
  const arr = [];
  for (const key in object) {
    arr.push(key);
  }
  return arr;
}
const keys = showObjectKeys(audi);
console.log("keys ===", keys);
