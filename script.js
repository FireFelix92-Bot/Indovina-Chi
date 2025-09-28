// Elenco personaggi: metti i tuoi file nella cartella /img
const CHARACTERS = [
  { name: "Frigo Camelo", img: "img/Frigo Camelo.jpg" },
  { name: "Los Trallalleritos", img: "img/Los Trallalleritos.jpg" },
  { name: "Sigma Boy", img: "img/Sigma Boy.jpg" },
  { name: "Ballerina Cappuccina", img: "img/Ballerina Cappuccina.webp" },
  { name: "Bandito Bobrito", img: "img/Bandito Bobrito.jpg" },
  { name: "Blueberrini Octopussini", img: "img/Blueberrini Octopussini.webp" },
  { name: "Bombardino Croccodillo", img: "img/Bombardino Croccodillo.jpg" },
  { name: "Boneca Ambalabu", img: "img/Boneca Ambalabu.webp" },
  { name: "Cannelloni Dragoni", img: "img/Cannelloni Dragoni.jpg" },
  { name: "Cappuccino Assassino", img: "img/Cappuccino Assassino.jpg" },
  { name: "Chimpanzini Bananini", img: "img/Chimpanzini Bananini.webp" },
  { name: "Cocofanto Elefanto", img: "img/Cocofanto Elefanto.webp" },
  { name: "Crocodillo Penisini", img: "img/Crocodillo Penisini.webp" },
  { name: "Frulli Frulla", img: "img/Frulli Frulla.jpg" },
  { name: "Giraffa Celeste", img: "img/Giraffa Celeste.jpg" },
  { name: "Glorbo Fruttordillo", img: "img/Glorbo Fruttordillo.jpg" },
  { name: "La Grande Combinazione", img: "img/La Grande Combinazione.jpg" },
  { name: "La Vacca Saturno Saturnità", img: "img/La Vacca Saturno Saturnità.webp" },
  { name: "Lirili Larila", img: "img/Lirili Larila.png" },
  { name: "Matteo", img: "img/Matteo.webp" },
  { name: "Orangutini Ananasini", img: "img/Orangutini Ananasini.jpg" },
  { name: "Spoinoro Golubiro", img: "img/Spoinoro Golubiro.webp" },
  { name: "Strawberrini Flamingelli", img: "img/Strawberrini Flamingelli.webp" },
  { name: "Ta Ta Ta Sahur", img: "img/Ta Ta Ta Sahur.webp" },
  { name: "Trallallero Trallallà", img: "img/Trallallero Trallallà.webp" },
  { name: "TrenoStruzzo Turbo 3000", img: "img/Treno Struzzo Turbo 3000.jpg" },
  { name: "Trippi Troppi Troppa Trippa", img: "img/Trippi Troppi Troppa Trippa.jpeg" },
  { name: "Trippi Troppi", img: "img/Trippi Troppi.webp" },
  { name: "Tung Tung Tung Sahur", img: "img/Tung Tung Tung Sahur.webp" },
  { name: "Udin din dun", img: "img/Udin din dun.jpg" },
  { name: "67", img: "img/67.webp" },
  { name: "Burbaloni Luilioli", img: "img/Burbaloni Luilioli.webp" },
  { name: "Cacto Hippopotamo", img: "img/Cacto Hippopotamo.jpg" },
  { name: "Karkerkark Kurkur", img: "img/Karkerkark Kurkur.webp" },
  { name: "Orcalero Orcalà", img: "img/Orcalero Orcalà.jpg" },
  { name: "Piccione Macchina", img: "img/Piccione Macchina.webp" },
  { name: "Tipitopotaco", img: "img/Tipitopotaco.jpg" },
  { name: "Avocadini Guffo", img: "img/Avocadini Guffo.webp" },
  { name: "Ballerino Lulilolo", img: "img/Ballerino Lulilolo.jpg" },
  { name: "Bum Job Job Sand", img: "img/Bum Job Job Sand.webp" },
  { name: "La Cucaracha", img: "img/La Cucaracha.webp" },
  { name: "Las Trallalleritas", img: "img/Las Trallalleritas.jpg" },
  { name: "Las Vaquitas Saturnitas", img: "img/Las Vaquitas Saturnitas.jpg" },
  { name: "Pot Hotspot", img: "img/Pot Hotspot.jpg" },
  { name: "Pussinis Sushini", img: "img/Pussinis Sushini.webp" },
  { name: "Strawberrini Elefantini", img: "img/Strawberrini Elefantini.jpg" },
  { name: "Svinino Bombondino", img: "img/Svinino Bombondino.webp" },
  { name: "Avocadini Octopussini", img: "img/Avocadini Octopussini.jpg" },
  { name: "Bantalero Bobo'o", img: "img/Bantalero Bobo'o.jpg" },
  { name: "Bum Bum Dragolo", img: "img/Bum Bum Dragolo.jpg" },
  { name: "Cacasito Salatito", img: "img/Cacasito Salatito.jpg" },
  { name: "Elefante Frigorifero", img: "img/Elefante Frigorifero.webp" },
  { name: "Gatto Ventilatorio", img: "img/Gatto Ventilatorio.webp" },
  { name: "Justin Beaver", img: "img/Justin Beaver.webp" },
  { name: "Los Dragolitos", img: "img/Los Dragolitos.webp" },
  { name: "Margheriti Octopussini", img: "img/Margheriti Octopussini.webp" },
  { name: "Squalito Formaggiosito", img: "img/Squalito Formaggiosito.webp" },
  { name: "Alessio", img: "img/Alessio.jpeg" },
  { name: "Carloo", img: "img/Carloo.jpg" },
  { name: "Cocosini Mama", img: "img/Cocosini Mama.webp" },
  { name: "Los Bombinitos", img: "img/Los Bombinitos.jpg" },
  { name: "Los Crocodilitos", img: "img/Los Crocodilitos.jpg" },
  { name: "Los Orcalitos", img: "img/Los Orcalitos.webp" },
  { name: "No My HotSpot", img: "img/No My HotSpot.jpg" },
  { name: "Pakrahmatamat", img: "img/Pakrahmatamat.jpeg" },
  { name: "Pinguino Cocosino", img: "img/Pinguino Cocosino.webp" },
  { name: "Tob Tobi Tob", img: "img/Tob Tobi Tob.webp" },
  { name: "Tractoro Dinosauro", img: "img/Tractoro Dinosauro.webp" },
  { name: "Tralalita Tralala", img: "img/Tralalita Tralala.jpg" },
  { name: "Tukanno Bananno", img: "img/Tukanno Bananno.webp" },
  { name: "Agarrini la Palini", img: "img/Agarrini la Palini.jpg" },
  { name: "BlackHole Goat", img: "img/BlackHole Goat.webp" },
  { name: "Esok Sekolah", img: "img/Esok Sekolah.webp" },
  { name: "Ketupat Kepat", img: "img/Ketupat Kepat.webp" },
  { name: "Los Torrytghinni Dragonfruttini", img: "img/Los Torrytghinni Dragonfruttini.jpg" },
  { name: "Nuclearo Dinosauro", img: "img/Nuclearo Dinosauro.webp" },
  { name: "Quesadilla Crocodila", img: "img/Quesadilla Crocodila.webp" },
  { name: "Torrutghinni Dragonfruttini", img: "img/Torrutghinni Dragonfruttini.webp" },
  { name: "Spaghettii Tualetti", img: "img/Spaghettii Tualetti.jpg" },
  { name: "Tralaledon", img: "img/Tralaledon.webp" },
  { name: "Noobini Pizzarini", img: "img/Noobini Pizzarini.jpg" },
  { name: "Tartaruga Cisterna", img: "img/Tartaruga Cisterna.jpg" },
  // aggiungi/rimuovi qui (nome e percorso immagine)
];

const STORAGE_KEY = "brainrot-guesswho:off";
const loadOff = () => new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
const saveOff = s => localStorage.setItem(STORAGE_KEY, JSON.stringify([...s]));

const grid = document.getElementById("grid");
const search = document.getElementById("search");
const resetBtn = document.getElementById("reset");
const shuffleBtn = document.getElementById("shuffle");
const toggleNames = document.getElementById("toggle-names");

let off = loadOff();
let data = [...CHARACTERS];

function render(list = data) {
  grid.innerHTML = "";
  const q = (search.value || "").toLowerCase().trim();

  list.forEach(({ name, img }) => {
    if (q && !name.toLowerCase().includes(q)) return;

    const btn = document.createElement("button");
    btn.className = "card";
    btn.type = "button";
    btn.dataset.name = name;

    const image = document.createElement("img");
    image.className = "thumb";
    image.src = img;
    image.alt = name;

    const label = document.createElement("span");
    label.className = "label";
    label.textContent = name;

    btn.append(image, label);
    if (off.has(name)) btn.classList.add("off");
    btn.addEventListener("click", () => {
      const isOff = btn.classList.toggle("off");
      isOff ? off.add(name) : off.delete(name);
      saveOff(off);
    });

    grid.appendChild(btn);
  });

  document.body.classList.toggle("hide-names", toggleNames.checked);
}

search.addEventListener("input", render);
resetBtn.addEventListener("click", () => { off = new Set(); saveOff(off); search.value = ""; render(); });
shuffleBtn.addEventListener("click", () => {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  render();
});
toggleNames.addEventListener("change", () => document.body.classList.toggle("hide-names", toggleNames.checked));

render();
