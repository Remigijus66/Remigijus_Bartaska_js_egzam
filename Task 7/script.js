/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

function showObjectKeys(object) {
  const arr = [];
  for (const key in object) {
    arr.push(key);
  }
  return arr;
}
const keys = showObjectKeys(audi);
console.log("keys ===", keys);
