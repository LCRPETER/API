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
// // Base de Json-server avec la methode GET
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
