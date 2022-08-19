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

class Movie {
  constructor(ttl, dir, budg) {
    this.title = ttl;
    this.director = dir;
    this.budget = budg;

    this.wasExpensive = function () {
      if (this.budget > 100000000) {
        return true;
      } else {
        return false;
      }
    };
  }
}
const titanic = new Movie("Titanic", "Cameron", 180000000);
console.log("titanic ===", titanic);
console.log("titanic.wasExpensive() ===", titanic.wasExpensive());

const suolis = new Movie("Suolis", "Zickyte", 100000);
console.log("suolis ===", suolis);
console.log("suolis.wasExpensive() ===", suolis.wasExpensive());
