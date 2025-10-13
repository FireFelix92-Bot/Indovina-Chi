// Elenco personaggi: metti i tuoi file nella cartella /img
const CHARACTERS = [
  { name: "Frigo Camelo", img: "img/Frigo Camelo.jpg" },
  { name: "Los Trallalleritos", img: "img/Los Trallalleritos.jpg" },
  { name: "Sigma Boy", img: "img/Sigma Boy.jpg" },
  { name: "Ballerina Cappuccina", img: "img/Ballerina Cappuccina.webp" },
  { name: "Bandito Bobrito", img: "img/Bandito Bobrito.jpg" },
  { name: "Blueberrini Octopussini", img: "img/Blueberrini Octopussini.webp" },
  { name: "Bombardiro Crocodillo", img: "img/Bombardiro Crocodillo.jpg" },
  { name: "Boneca Ambalabu", img: "img/Boneca Ambalabu.webp" },
  { name: "Cannelloni Dragoni", img: "img/Cannelloni Dragoni.jpg" },
  { name: "Cappuccino Assassino", img: "img/Cappuccino Assassino.jpg" },
  { name: "Chimpanzini Bananini", img: "img/Chimpanzini Bananini.webp" },
  { name: "Cocofanto Elefanto", img: "img/Cocofanto Elefanto.webp" },
  { name: "Crocodildo Penisini", img: "img/Crocodildo Penisini.webp" },
  { name: "Frulli Frulla", img: "img/Frulli Frulla.jpg" },
  { name: "Giraffa Celeste", img: "img/Giraffa Celeste.jpg" },
  { name: "Glorbo Fruttodrillo", img: "img/Glorbo Fruttodrillo.jpg" },
  { name: "La Grande Combinazione", img: "img/La Grande Combinazione.jpg" },
  { name: "La Vacca Saturno Saturnita", img: "img/La Vacca Saturno Saturnita.webp" },
  { name: "Lirili Larila", img: "img/Lirili Larila.png" },
  { name: "Matteo", img: "img/Matteo.webp" },
  { name: "Orangutini Ananasini", img: "img/Orangutini Ananasini.jpg" },
  { name: "Spioniro Golubiro", img: "img/Spioniro Golubiro.webp" },
  { name: "Strawberrelli Flamingelli", img: "img/Strawberrelli Flamingelli.webp" },
  { name: "Ta Ta Ta Sahur", img: "img/Ta Ta Ta Sahur.webp" },
  { name: "Trallallero Trallalla", img: "img/Trallallero Trallalla.webp" },
  { name: "TrenoStruzzo Turbo 3000", img: "img/Treno Struzzo Turbo 3000.jpg" },
  { name: "Trippi Troppi Troppa Trippa", img: "img/Trippi Troppi Troppa Trippa.jpeg" },
  { name: "Trippi Troppi", img: "img/Trippi Troppi.webp" },
  { name: "Tung Tung Tung Sahur", img: "img/Tung Tung Tung Sahur.webp" },
  { name: "Udin din dun", img: "img/Udin din dun.jpg" },
  { name: "67", img: "img/67.webp" },
  { name: "Burbaloni Luliloli", img: "img/Burbaloni Luliloli.webp" },
  { name: "Cacto Hippopotamo", img: "img/Cacto Hippopotamo.jpg" },
  { name: "Karkerkar Kurkur", img: "img/Karkerkar Kurkur.webp" },
  { name: "Orcalero Orcala", img: "img/Orcalero Orcala.jpg" },
  { name: "Piccione Macchina", img: "img/Piccione Macchina.webp" },
  { name: "Tipitopitaco", img: "img/Tipitopitaco.jpg" },
  { name: "Avocadini Guffo", img: "img/Avocadini Guffo.webp" },
  { name: "Ballerino Lololo", img: "img/Ballerino Lololo.jpg" },
  { name: "Job job job Sahur", img: "img/Job job job Sahur.webp" },
  { name: "La Cucaracha", img: "img/La Cucaracha.webp" },
  { name: "Las Trallalleritas", img: "img/Las Trallalleritas.jpg" },
  { name: "Las Vaquitas Saturnitas", img: "img/Las Vaquitas Saturnitas.jpg" },
  { name: "Pot Hotspot", img: "img/Pot hotspost.jpg" },
  { name: "Pussini Sushini", img: "img/Pussini Sushini.webp" },
  { name: "Strawberrini Elefantini", img: "img/Strawberrini Elefantini.jpg" },
  { name: "Svinino Bombondino", img: "img/Svinino Bombondino.webp" },
  { name: "Avocadini Octopussini", img: "img/Avocadini Octopussini.jpg" },
  { name: "Bantalero Boboo", img: "img/Bantalero Boboo.jpg" },
  { name: "Bum Bum Dragolo", img: "img/Bum Bum Dragolo.jpg" },
  { name: "Cacasito Satalito", img: "img/Cacasito Satalito.jpg" },
  { name: "Elefante Frigorifero", img: "img/Elefante Frigorifero.webp" },
  { name: "Gatto Ventilatorino", img: "img/Gatto Ventilatorino.webp" },
  { name: "Justin Beaver", img: "img/Justin Beaver.webp" },
  { name: "Los Dragolitos", img: "img/Los Dragolitos.webp" },
  { name: "Margheriti Octopussini", img: "img/Margheriti Octopussini.jpg" },
  { name: "Squalito Formaggiosito", img: "img/Squalito Formaggiosito.webp" },
  { name: "Alessio", img: "img/Alessio.jpeg" },
  { name: "Carloo", img: "img/Carloo.jpg" },
  { name: "Cocosini Mama", img: "img/Cocosini Mama.webp" },
  { name: "Los Bombinitos", img: "img/Los Bombinitos.jpg" },
  { name: "Los Crocodilitos", img: "img/Los Crocodilitos.jpg" },
  { name: "Los Orcalitos", img: "img/Los Orcalitos.webp" },
  { name: "No My HotSpot", img: "img/No My HotSpot.jpg" },
  { name: "Pakrahmatmamat", img: "img/Pakrahmatmamat.jpeg" },
  { name: "Penguino Cocosino", img: "img/Penguino Cocosino.jpg" },
  { name: "Tob Tobi Tob", img: "img/Tob Tobi Tob.webp" },
  { name: "Tractoro Dinosauro", img: "img/Tractoro Dinosauro.webp" },
  { name: "Tralalita Tralala", img: "img/Tralalita Tralala.jpg" },
  { name: "Tukanno Bananno", img: "img/Tukanno Bananno.webp" },
  { name: "Agarrini la Palini", img: "img/Agarrini la Palini.jpg" },
  { name: "BlackHole Goat", img: "img/BlackHole Goat.webp" },
  { name: "Esok Sekolah", img: "img/Esok Sekolah.webp" },
  { name: "Ketupat Kepat", img: "img/Ketupat Kepat.webp" },
  { name: "Los Torrtughinni Dragonfrutinni", img: "img/Los Torrtughinni Drafonfrutinni.jpg" },
  { name: "Nuclearo Dinossauro", img: "img/Nuclearo Dinossauro.webp" },
  { name: "Quesadilla Crocodila", img: "img/Quesadilla Crocodila.webp" },
  { name: "Torrtughinni Dragonfrutinni", img: "img/Torrtughinni Dragonfrutinni.webp" },
  { name: "Spaghetti Tualetti", img: "img/Spaghetti Tualetti.jpg" },
  { name: "Tralaledon", img: "img/Tralaledon.webp" },
  { name: "Noobini Pizzanini", img: "img/Noobini Pizzanini.jpg" },
  { name: "Tartaruga Cisterna", img: "img/Tartaruga Cisterna.jpg" },
  { name: "Tang Tang Kelentang", img: "img/Tang Tang Kelentang.webp" },
  { name: "Bananita Dolfinita", img: "img/Bananita Dolfinita.webp" },
  { name: "Bandito Axolotito", img: "img/Bandito Axolotito.webp" },
  { name: "Crostini Bambini", img: "img/Crostini Bambini.jpg" },
  { name: "Malame Amarele", img: "img/Malame Amarele.webp" },
  { name: "Trulimero Trulicina", img: "img/Trulimero Trulicina.jpg" },
  { name: "Los Matteos", img: "img/Los Matteos.png" },
  { name: "Topinello Fruttarello", img: "img/Topinello Fruttarello.png" },
  { name: "Signore Carapace", img: "img/Signore Carapace.png" },
  { name: "Centuzzarella Croccantini", img: "img/Centuzzarella Croccantini.png" },
  { name: "Spaghettini Serpentini", img: "img/Spaghettini Serpentini.jpg" },
  { name: "Serpentita Bananita", img: "img/Serpentita Bananita.jpg" },
  { name: "Lucertola Bombardiera", img: "img/Lucertola Bombardiera.webp" },
  { name: "Triki Traka Telas", img: "img/Triki Traka Telas.webp" },
  { name: "Rhino Toasterino", img: "img/Rhino Toasterino.webp" },
  { name: "Horror Trallallero", img: "img/Horror Trallallero.jpg" },
  { name: "Extinct Lucertola Bombardiera", img: "img/Extinct Lucertola Bombardiera.png" },
  { name: "Extinct Boneca Ambalabu", img: "img/Extinct Boneca Ambalabu.png" },
  { name: "Extinct Burbaloni Luliloli", img: "img/Extinct Burbaloni Luliloli.png" },
  { name: "Extinct Chucaracha", img: "img/Extinct Chucaracha.png" },
  { name: "Extinct Torrtughinni Dragonfrutinni", img: "img/Extinct Torrtughinni Dragonfrutinni.png" },
  { name: "Los 67", img: "img/Los 67.png" },
  { name: "Los Bros", img: "img/Los Bros.jfif" },
  { name: "Los noo my Hotspot", img: "img/Los noo my Hotspot.png" },
  { name: "Las Sis", img: "img/Las Sis.png" },
  { name: "Las Cappuccinas", img: "img/Las Cappuccinas.png" },
  { name: "Los Hotspotsitos", img: "img/Los Hotspotsitos.png" },
  { name: "Yes my exams", img: "img/Yes my exams.png" },
  { name: "Unclito Samito", img: "img/Unclito Samito.png" },
  { name: "Bombardini Tortini", img: "img/Bombardini Tortini.png" },
  { name: "Graipuss Medussi", img: "img/Graipuss Medussi.png" },
  { name: "Perochello Lemonchello", img: "img/Perochello Lemonchello.png" },
  { name: "Mangolini Parroccini", img: "img/Mangolini Parroccini.png" },
  { name: "Mariachi Corazoni", img: "img/Mariachi Corazoni.png" },
  { name: "Noo my exams", img: "img/Noo my exams.png" },
  { name: "Sammyni Spiderini", img: "img/Sammyni Spiderini.png" },
  { name: "Squalanana", img: "img/Squalanana.png" },
  { name: "Spooky Trallallero", img: "img/Spooky Trallallero.jfif" },
  { name: "Vulturino Skeletono", img: "img/Vulturino Skeletono.webp" },
  { name: "La Spooky Combinazione", img: "img/La Spooky Combinazione.jpg" },
  { name: "Los Spookaleritos", img: "img/Los Spookaleritos.png" },
  { name: "Horror Ballerina", img: "img/Horror Ballerina.png" },
  { name: "Halloweeno Camelino", img: "img/Halloweeno Camelino.png" },
  { name: "Elefanto Zucchetta", img: "img/Elefanto Zucchetta.png" },
  { name: "Horror Examen", img: "img/Horro Examen.png" },
  // aggiungi/rimuovi qui (nome e percorso immagine)
];

const STORAGE_KEY = "brainrot-guesswho:off";
const loadOff = () => new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
const saveOff = s => localStorage.setItem(STORAGE_KEY, JSON.stringify([...s]));

const grid = document.getElementById("grid");
const search = document.getElementById("search");
const resetBtn = document.getElementById("reset");
const shuffleBtn = document.getElementById("shuffle");
const toggleNames = document.getElementById("toggele-names");

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
resetBtn.addEventListener("click", () => {
  off = new Set();
  saveOff(off);
  search.value = "";
  render();
});
shuffleBtn.addEventListener("click", () => {
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  render();
});
toggleNames.addEventListener("change", () => {
  document.body.classList.toggle("hide-names", toggleNames.checked);
});

render();
