const defaultGameState = {
  acte: 1,
  lieu: "maison_grand_pere",
  inventaire: {
    carnet: false,
    cle_tiroir: false,
    fragment_1: false,
    fragment_2: false,
    fragment_3: false
  },
  enigmesResolues: {
    tiroir: false,
    lettre: false,
    carnet: false
  }
};

let gameState = loadGame();

function loadGame() {
  const save = localStorage.getItem("escape_flamel_state");
  return save ? JSON.parse(save) : structuredClone(defaultGameState);
}

function saveGame() {
  localStorage.setItem("escape_flamel_state", JSON.stringify(gameState));
}

function startGame() {
  gameState.lieu = "maison_grand_pere";
  saveGame();
  window.location.href = "maison.html";
}

function resetGame() {
  localStorage.removeItem("escape_flamel_state");
  alert("La partie a été réinitialisée.");
  location.reload();
}
