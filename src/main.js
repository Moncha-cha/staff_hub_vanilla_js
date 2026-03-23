import "./style.css";

// MOCKING DATABASE, Fetch simulace
const assets = [
  {
    id: "1-ACC",
    name: "Monitor Acer 120Hz",
    category: "Příslušenství",
    type: "Monitor",
    status_id: "issue",
    status_text: "Nefunkční",
  },
  {
    id: "2-ACC",
    name: "Klávesnice Logitech",
    category: "Příslušenství",
    type: "Klávesnice",
    status_id: "ok",
    status_text: "V pořádku",
  },
  {
    id: "3-ACC",
    name: "Myš Razer",
    category: "Příslušenství",
    type: "Myš",
    status_id: "ok",
    status_text: "V pořádku",
  },
  {
    id: "4-ACC",
    name: "Sluchátka HyperX",
    category: "Příslušenství",
    type: "Sluchátka",
    status_id: "pending",
    status_text: "Fasování",
  },
  {
    id: "5-ACC",
    name: "Webkamera Logitech",
    category: "Příslušenství",
    type: "Webkamera",
    status_id: "ok",
    status_text: "V pořádku",
  },
  {
    id: "6-ACC",
    name: "Reproduktory Bose",
    category: "Příslušenství",
    type: "Reproduktory",
    status_id: "ok",
    status_text: "V pořádku",
  },
  {
    id: "7-ACC",
    name: "Externí pevný disk Seagate",
    category: "Příslušenství",
    type: "Pevný disk",
    status_id: "issue",
    status_text: "Nefunkční",
  },
  {
    id: "8-ACC",
    name: "USB flash disk SanDisk",
    category: "Příslušenství",
    type: "Flash disk",
    status_id: "ok",
    status_text: "V pořádku",
  },
  {
    id: "9-ACC",
    name: "Grafická karta NVIDIA",
    category: "Příslušenství",
    type: "Grafická karta",
    status_id: "issue",
    status_text: "Nefunkční",
  },
  {
    id: "10-ACC",
    name: "Zvuková karta Creative Sound Blaster",
    category: "Příslušenství",
    type: "Zvuková karta",
    status_id: "pending",
    status_text: "Fasování",
  },
  {
    id: "11-ACC",
    name: "Kancelářská křesla",
    category: "Nábytek",
    type: "Křesla",
    status_id: "ok",
    status_text: "V pořádku",
  },
  {
    id: "12-ACC",
    name: "Kancelářské stoly",
    category: "Nábytek",
    type: "Stoly",
    status_id: "pending",
    status_text: "Fasování",
  },
  {
    id: "13-ACC",
    name: "Kancelářské skříně",
    category: "Nábytek",
    type: "Skříně",
    status_id: "issue",
    status_text: "Nefunkční",
  },
  {
    id: "14-ACC",
    name: "Kancelářské židle",
    category: "Nábytek",
    type: "Židle",
    status_id: "ok",
    status_text: "V pořádku",
  },
  {
    id: "15-ACC",
    name: "Kancelářské poličky",
    category: "Nábytek",
    type: "Poličky",
    status_id: "ok",
    status_text: "V pořádku",
  },
  {
    id: "16-ACC",
    name: "Konferenční stoly",
    category: "Nábytek",
    type: "Konferenční stoly",
    status_id: "issue",
    status_text: "Nefunkční",
  },
  {
    id: "17-ACC",
    name: "Přístupová karta",
    category: "Bezpečnost",
    type: "Přístupová karta",
    status_id: "issue",
    status_text: "Nefunkční",
  },
  {
    id: "18-ACC",
    name: "Služební telefon",
    category: "Příslušenství",
    type: "Telefon",
    status_id: "ok",
    status_text: "V pořádku",
  },
  {
    id: "19-ACC",
    name: "Služební auto",
    category: "Doprava",
    type: "Auto",
    status_id: "pending",
    status_text: "Fasování",
  },
];

// ------ OVLADACE, STAV

const assetContainer = document.getElementById("asset-grid");
const adminButton = document.getElementById("admin-toggle-btn");
let isAdmin = false;

// ------ FUNKCE

function renderAssets(assets) {
  assetContainer.innerHTML = ""; // aby nedaval duplikace
  assets.forEach((asset) => {
    assetContainer.innerHTML += `
    <div class="asset-card">
      
      <div class="card-title-row">
        <h3>${asset.name}</h3>
        <span class="category-tag">${asset.category}</span>
      </div>
      
      <dl class="asset-details">
        <dt>ID:</dt>
        <dd>${asset.id}</dd>
        
        <dt>Typ:</dt>
        <dd>${asset.type}</dd>
      </dl>
      
      <div>
        <span class="status-badge status-${asset.status_id}">${asset.status_text}</span>
      </div>
      
      <div class="card-footer">
        <button class="admin-btn">Spravovat</button>
      </div>

    </div>
  `;
  });
}

renderAssets(assets);

// ------ UDALOSTI

// Pokud je prihlasen
adminButton.addEventListener("click", () => {
  if (isAdmin === true) {
    console.log("Admin odhlášen");
    isAdmin = false;
    document.body.classList.remove("admin-mode");
    adminButton.textContent = "Přihlásit jako admin";
  }

  // Pokud neni prihlasen
  else {
    const password = prompt("Zadejte heslo pro přístup do administrace:"); // nepouzila jsem modal s password inputem, stavim funkcni minimum
    if (password === "admin123") {
      console.log("Admin přihlášen");
      isAdmin = true;
      document.body.classList.add("admin-mode");
      adminButton.textContent = "Odhlásit admina";
    }

    // Špatné heslo
    else {
      alert("Neplatné heslo. Přístup odepřen.");
    }
  }
});

// ----- FILTRY

const nefunkcniMajetek = assets.filter((asset) => asset.status_id === "issue");
console.log("Nefunkční majetek:", nefunkcniMajetek);
