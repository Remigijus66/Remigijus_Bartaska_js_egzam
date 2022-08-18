/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

"use strict";
console.log("script.js");

const ENDPOINT = "cars.json";
const destEl = document.getElementById("output");

destEl.textContent = "";

fetch(ENDPOINT)
  .then((resp) => resp.json())
  .then((dataInJs) => {
    createCardsList(dataInJs, destEl);
    console.log("dataInJs ===", dataInJs);
  })
  .catch((err) => console.warn(err));

/** creates single card
 *
 * @param {*} brnd string - name of brand
 * @param {*} mdl array - names of models
 * @returns
 */
function createCarsCard(brnd, mdl) {
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  const headerEl = document.createElement("h3");
  headerEl.innerHTML = `Cars from <span> ${brnd} </span>`;
  const carsEl = document.createElement("ul");
  mdl.forEach((e) => {
    const carEl = document.createElement("li");
    carEl.textContent = e;
    carsEl.append(carEl);
  });
  cardEl.append(headerEl, carsEl);
  return cardEl;
}
/** makes list of cards in  HTML destination
 *
 * @param {*} arr array of data
 * @param {*} dest target element to create a list in
 */

function createCardsList(arr, dest) {
  arr.forEach((e) => {
    const card = createCarsCard(e.brand, e.models);
    dest.append(card);
  });
}
