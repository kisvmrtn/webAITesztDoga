import Kosar from "../PUBLIC/Kosar.js";
import Termek from "../PUBLIC/Termek.js";

function kosarMegjelenitTeszt() {
  const termekek = [
    {
      id: 0,
      nev: "Termék 1",
      ar: 1000,
      kep: "./kepek/placeholder.jpg",
      leiras: "Ez egy példa termék leírása.",
    },
  ];

  const vartSzoveg = ["1", "Termék 1", "1000 Ft"];
  let pElem = document.createElement("div");
  //console.log(pElem);
  const tesztKosar = new Kosar(termekek, pElem);
  let kiirtElem = pElem.querySelectorAll("tbody tr td");

  //console.assert(kiirtElem[0].textContent === "1");
  console.log(pElem);
  for (let i = 0; i < 3; i++) {
    console.assert(
      kiirtElem[i].textContent == vartSzoveg[i],
      `Nem egyezik a kiiras!
      \nKiírt: ${kiirtElem[i].textContent}
      \nVárt: ${vartSzoveg[i]}`
    );
  }
  console.log("A teszt sikeresen lefutott.");
}
kosarMegjelenitTeszt();

function kosarGombMegjelenitTeszt() {
  const termekek = {
    id: 0,
    nev: "Termék 1",
    ar: 1000,
    kep: "./kepek/placeholder.jpg",
    leiras: "Ez egy példa termék leírása.",
  };
  let pElem = document.createElement("div");
  const tesztTermek = new Termek(termekek, pElem, 0);
  let kiirtGomb = pElem.querySelector(".termek .card .card-body button");
  //console.log(pElem);
  //console.log(kiirtGomb.textContent);

  console.assert(
    kiirtGomb.textContent === "Kosárba",
    `Nem sikerült kiirna a kosárba gombot.
    `
  );
}
kosarGombMegjelenitTeszt();
