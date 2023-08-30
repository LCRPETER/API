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

fetch("data.json")
  .then((res) => res.json())
  .then((data) => console.log(data));
