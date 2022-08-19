/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
"use strict";

function Calculator(ai, be) {
  this.a = ai;
  this.b = be;

  this.sum = function () {
    return this.a + this.b;
  };
  this.subtraction = function () {
    return this.a - this.b;
  };
  this.multiplication = function () {
    return this.a * this.b;
  };
  this.division = function () {
    return this.a / this.b;
  };
}

console.log("new Calculator(12, 6).sum() ===", new Calculator(12, 6).sum());
console.log("new Calculator(12, 6).subtraction() ===", new Calculator(12, 6).subtraction());
console.log("new Calculator(12, 6).multiplication() ===", new Calculator(12, 6).multiplication());
console.log("new Calculator(12, 6).division() ===", new Calculator(12, 6).division());
