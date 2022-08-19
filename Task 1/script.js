/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
"use strict";

const inputEl = document.getElementById("search");
const btnEl = document.getElementById("submit-btn");
const destEl = document.getElementById("output");

btnEl.addEventListener("click", (e) => {
  e.preventDefault();
  const kilos = inputEl.value;

  if (isNaN(kilos)) {
    destEl.textContent = "Please enter valid number";
    document.querySelector("form").reset();
    btnEl.value = "Calculate";
    return;
  }
  if (btnEl.value === "Calculate") {
    destEl.textContent = "";
    new Converter(kilos).toPounds();
    new Converter(kilos).toGrams();
    new Converter(kilos).toOunces();
    btnEl.value = "Reset";
  } else {
    destEl.textContent = "";
    document.querySelector("form ").reset();
    btnEl.value = "Calculate";
  }
});

class Converter {
  constructor(kilos) {
    this.kg = kilos;
    this.toPounds = function () {
      const resEl = document.createElement("p");
      resEl.textContent = `${this.kg} kilograms makes ${(this.kg * 2.2046).toFixed(2)} pounds`;
      destEl.append(resEl);
    };
    this.toGrams = function () {
      const resEl = document.createElement("p");
      resEl.textContent = `${this.kg} kilograms makes ${(this.kg / 0.001).toFixed(2)} grams`;
      destEl.append(resEl);
    };
    this.toOunces = function () {
      const resEl = document.createElement("p");
      resEl.textContent = `${this.kg} kilograms makes ${(this.kg * 35.274).toFixed(2)} ounces`;
      destEl.append(resEl);
    };
  }
}
