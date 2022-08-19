/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
"use strict";

const btnClickEl = document.getElementById("btn__element");
const btnCountEl = document.getElementById("btn__state");
let counter = 0;

btnClickEl.addEventListener("click", () => {
  counter++;
  btnCountEl.textContent = counter;
});
