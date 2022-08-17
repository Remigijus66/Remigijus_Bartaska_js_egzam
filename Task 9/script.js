/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
"use strict";
console.log("script.js");
/**
 *
 * @param {string} ttl
 * @param {string} director
 * @param {number} budget
 */
function Movie(ttl, director, budget) {
  this.title = ttl;
  this.director = director;
  this.budget = budget;

  this.wasExpensive = function () {
    if (this.budget > 100000000) {
      return true;
    } else {
      return false;
    }
  };
}
const titanic = new Movie("Titanic", "Cameron", 180000000);
console.log("titanic ===", titanic);
console.log("titanic.wasExpensive() ===", titanic.wasExpensive());

const suolis = new Movie("Suolis", "Zickyte", 100000);
console.log("suolis ===", suolis);
console.log("suolis.wasExpensive() ===", suolis.wasExpensive());
