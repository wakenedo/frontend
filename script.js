const API_BASE = "https://backend-95jb.onrender.com/api";

// ========================
// GOOGLE DRIVE LIST
// ========================
async function loadGDrive() {
  const listEl = document.getElementById("gdrive-list");
  listEl.innerHTML = "<li class='list-group-item'>Carregando...</li>";

  const res = await fetch(`${API_BASE}/gdrive/files`);
  const files = await res.json();

  listEl.innerHTML = "";

  files.forEach((file) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = `${file.name} (${file.id})`;
    listEl.appendChild(li);
  });
}

// ========================
// BLOB LIST
// ========================
async function loadBlob() {
  const listEl = document.getElementById("blob-list");
  listEl.innerHTML = "<li class='list-group-item'>Carregando...</li>";

  const res = await fetch(`${API_BASE}/blob/files`);
  const files = await res.json();

  listEl.innerHTML = "";

  files.forEach((file) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = `${file.name} — ${file.size} bytes`;
    listEl.appendChild(li);
  });
}

// ========================
// SYNC
// ========================
async function startSync() {
  document.getElementById("status-box").textContent =
    "Executando sincronização...";

  const res = await fetch(`${API_BASE}/sync`, { method: "POST" });
  const result = await res.json();

  updateStatus(result);
}

// ========================
// STATUS
// ========================
async function loadStatus() {
  const res = await fetch(`${API_BASE}/status`);
  const status = await res.json();
  updateStatus(status);
}

function updateStatus(status) {
  document.getElementById("status-box").textContent = JSON.stringify(
    status,
    null,
    2
  );
}

// Atualiza status automaticamente a cada 5s
setInterval(loadStatus, 5000);

// Carregamento inicial
loadStatus();
