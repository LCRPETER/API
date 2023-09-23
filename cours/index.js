// XMLHttpRequest
// function ReqListener() {
//   console.log(this.responseText);
// }

// let req = new XMLHttpRequest();
// req.onload = ReqListener;
// req.open("get", "fichier.txt", true);
// req.send();

//------
// FETCH
//------

// fetch("fichier.txt");
//   .then((res) => res.text())
//   .then((data) => console.log(data));

fetch("data.json").then((res) => res.json());
// .then((data) => console.log(data));

// const myHeaders = new Headers();
// Base de Json-server avec la methode GET
// const init = {
//   methode: "GET",
//   header: myHeaders,
//   mode: "cors",
//   cache: "default",
// };
// fetch("data.json", init).then((res) => console.log(res));
// Base de Json-server avec la methode POST
// const init2 = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     pseudo: "LCR PETER",
//     message: "Yo les gars !",
//   }),
//   mode: "cors",
//   Credential: "sans-origin",
// };

// document.querySelector("form").addEventListener("submit", () => {
//   fetch("  http://localhost:3000/posts", init2).then(() =>
//     console.log("data envoyé")
//   );
// });

// Suppresion des donnée d'un utilisateur
// const init2 = {
//   method: "DELETE",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   mode: "cors",
//   Credential: "sans-origin",
// };
// document.querySelector("form").addEventListener("submit", () => {
//   fetch("  http://localhost:3000/posts/2", init2).then(() =>
//     console.log("data supprimé")
//   );
// });

//|--------------------------|
//|          JSON            |
//|__________________________|

// Méthode .json()

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    // Stringify => convertit en Json
    // console.log(JSON.stringify(data));
    // Parse => convertit json en objet js
    let settings = JSON.stringify(data);
    // console.log(JSON.parse(settings));
  });

//|--------------------------|
//|          Web API         |
//|__________________________|

//|--------------|
//|Client Storage|
//|______________|

//------------------------------------
// local Storage
//------------------------------------
localStorage.data = "je stock la data";

// Afficher les données stocker dans la localStorage au body

// document.body.textContent = localStorage.data;

// Suppression de la localStorage

// localStorage.removeItem("data");

const obj = {
  name: "peter",
  age: 22,
};

// convertion en json pour faire le localStorage

// localStorage.user = JSON.stringify(obj);

// convertion de json en un objet
let conv = localStorage.user;
// console.log(JSON.parse(conv));

//------------------------------------
// Session Storage//
//------------------------------------
sessionStorage.dataSettings = "55px";
console.log(sessionStorage.dataSettings);

// Suppression de la localStorage

sessionStorage.clear("dataSettings");

//------------------------------------
// Cookie
//------------------------------------

document.cookie = "username=peter";
