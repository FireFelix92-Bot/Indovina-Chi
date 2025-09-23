// Elenco personaggi: metti i tuoi file nella cartella /img
const CHARACTERS = [
  { name: "Frigo Camelo",    img: "img/Frigo Camelo.jpg" },
  { name: "Los Trallalleritos",    img: "img/Los Trallalleritos.jpg" },
  { name: "Sigma Boy",      img: "img/Sigma Boy.jpg" },
  { name: "Ballerina Cappuccina",      img: "img/Ballerina Cappuccina.webp" },
  { name: "Bandito Bobrito",      img: "img/Bandito Bobrito.jpg" },
  { name: "Blueberrini Octopussini",      img: "img/Blueberrini Octopussini.webp" },
  { name: "Bombardino Crocodilo",      img: "img/Bombardino Crocodillo.jpg" },
  { name: "Boneca Ambalabu",      img: "img/Boneca Ambalabu.webp" },
  { name: "Cannelloni Dragoni",      img: "img/Cannelloni Dragoni.jpg" },
  { name: "Cappuccino Assassino",      img: "img/Cappuccino Assassino.jpg" },
  { name: "Chimpanzini Bananini",      img: "img/Chimpanzini Bananini.webp" },
  { name: "Cocofanto Elefanto",      img: "img/Cocofanto Elefanto.webp" },
  { name: "Crocodildo Panisini",      img: "img/Crocodildo Penisini.webp" },
  { name: "Frulli Frulla",      img: "img/Frulli Frulla.jpg" },
  { name: "Giraffa Celeste",      img: "img/Giraffa Celeste.jpg" },
  { name: "Glorbo Fruttodrillo",      img: "img/Glorbo Fruttodrillo.jpg" },
  { name: "La Grande Combinazione",      img: "img/La Grande Combinazione.jpg" },
  { name: "La Vacca Saturno Saturnita",      img: "img/La VAcca Saturno Saturnita.webp" },
  { name: "Lirili Larila",      img: "img/Lirili Larila.png" },
  { name: "Matteo",      img: "img/Matteo.webp" },
  { name: "Orangutini Ananasini",      img: "img/Orangutini Ananasini.jpg" },
  { name: "Spioniro Golubiro",      img: "img/Spioniro Golubiro.webp" },
  { name: "Strawberrelli Flamingelli",      img: "img/Strawberrelli Flamingelli.webp" },
  { name: "Ta Ta Ta Sahur",      img: "img/Ta Ta Ta Sahur.webp" },
  { name: "Trallallero Trallallà",      img: "img/Trallallero Trallalla.webp" },
  { name: "TrenoStruzzo Turbo 3000",      img: "img/Treno Struzzo Turbo 3000.jpg" },
  { name: "Trippi Troppi Troppa Trippa",      img: "img/Trippi Troppi Troppa Trippa.jpeg" },
  { name: "Trippi Troppi",      img: "img/Trippi Troppi.webp" },
  { name: "Tung Tung Tung Sahur",      img: "img/Tung Tung Tung Sahur.webp" },
  { name: "Udin din dun",      img: "img/Udin din dun.jpg" },
  // ⬆️ aggiungi/rimuovi qui (nome e percorso immagine)
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
    image.className = "thumb"; image.src = img; image.alt = name;

    const label = document.createElement("span");
    label.className = "label"; label.textContent = name;

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
resetBtn.addEventListener("click", () => { off = new Set(); saveOff(off); search.value=""; render(); });
shuffleBtn.addEventListener("click", () => {
  for (let i = data.length-1; i>0; i--) { const j = Math.floor(Math.random()*(i+1)); [data[i],data[j]]=[data[j],data[i]]; }
  render();
});
toggleNames.addEventListener("change", () => document.body.classList.toggle("hide-names", toggleNames.checked));

render();
