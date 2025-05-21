import Model from "../PUBLIC/Model.js";

function removeKosarItemTeszt() {
  const tesztModel = new Model();
  const kosarElem = {
    id: 0,
    nev: "Termék 1",
    ar: 1000,
    kep: "./kepek/placeholder.jpg",
    leiras: "Ez egy példa termék leírása.",
  };
  tesztModel.addKosar(kosarElem);
  tesztModel.removeKosarItem(1); // nem ad vissza hibát, de nem is töröl semmit
  tesztModel.removeKosarItem(0);
  console.assert(
    tesztModel.getKosarLista().length === 0,
    `Nem sikerült eltávolítani a kosarElemet
    \nKosár lista: ${JSON.stringify(tesztModel.getKosarLista())}`
  );
  console.log("A teszt sikeresen lefutott.");
}
removeKosarItemTeszt();

function decreaseQuantityMennyCsokkTeszt() {
  const tesztModel = new Model();
  const kosarElem = {
    id: 0,
    nev: "Termék 1",
    ar: 1000,
    kep: "./kepek/placeholder.jpg",
    leiras: "Ez egy példa termék leírása.",
  };
  tesztModel.addKosar(kosarElem);
  tesztModel.addKosar(kosarElem);

  tesztModel.decreaseQuantity(0);

  console.assert(
    tesztModel.getKosarLista()[0].mennyiseg === 1,
    `Nem sikerült levonni a mennyiséget.
  \n Kosárban lévő mennyiség: ${tesztModel.getKosarLista()[0].mennyiseg}
  \n Várt mennyiség: ${1}`
  );
  console.log("Sikeresen lefutott a teszt.");
}
decreaseQuantityMennyCsokkTeszt();

function decreaseQuantityTorlesTeszt() {
  const tesztModel = new Model();
  const kosarElem = {
    id: 0,
    nev: "Termék 1",
    ar: 1000,
    kep: "./kepek/placeholder.jpg",
    leiras: "Ez egy példa termék leírása.",
  };
  tesztModel.addKosar(kosarElem);
  tesztModel.decreaseQuantity(0);

  console.assert(
    tesztModel.getKosarLista().length === 0,
    `Nem sikerült törölnie a terméket a kosárból.
    \nKosár darabszám: ${tesztModel.getKosarDarabszam()}`
  );
  console.log("Sikeresen lefutott a teszt.");
}
decreaseQuantityTorlesTeszt();

function kosarbaTeszGombTeszt() {}
