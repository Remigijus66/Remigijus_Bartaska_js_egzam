/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const destEl = document.getElementById("output");
const btnEl = document.getElementById("btn");

// event listener

btnEl.addEventListener("click", () => init());

// functions

/** initialises flow
 *
 */
async function init() {
  const users = await getUsers(ENDPOINT);
  destEl.innerHTML = "";
  makeCardList(users);
}

/** gets data from API
 *
 * @param {*} url
 * @returns
 */

async function getUsers(url) {
  try {
    const resp = await fetch(url);
    if (!resp.ok) throw "Error getting data from API";
    const dataBack = await resp.json();
    return dataBack;
  } catch (err) {
    console.warn(err);
  }
}
/** formats one card and adds to destination
 *
 * @param {*} dataObj object with card data
 */

function addOneCard(dataObj) {
  const card = `<div class="card">
 <img class="card__image" src=${dataObj.avatar_url} alt="avatar">
 <h4 class="card__title">${dataObj.login}</h4></div>
`;
  destEl.innerHTML += card;
}
/** makes card list from data object array
 *
 * @param {*} dataArr array of objects with card data
 */

function makeCardList(dataArr) {
  dataArr.forEach((element) => {
    addOneCard(element);
  });
}
