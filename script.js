// Elenco personaggi: metti i tuoi file nella cartella /img
const CHARACTERS = [
  { name: "Ballerina", img: "img/Ballerina.png" },
  { name: "Skibidi",    img: "img/skibidi.png" },
  { name: "Sigma",      img: "img/sigma.jpg" },
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
