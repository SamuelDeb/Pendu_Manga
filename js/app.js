const aAccents = "àâä";
const eAccents = "éèêë";
const iAccents = "ìïî";
const oAccents = "òôö";
const uAccents = "ùûü";
const lettres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let count = 1;
let nombreLettres = 0;
let imagePendu;
let zoneMot;
let zoneClavier;
let listeTouches;
let listeEspaces;
let motATrouver = "";
let nombreErreurs;
let boutonNouvellePartie;
let resultat;

function removeAccent(motATrouverElement) {
  let motATrouverEltMin = motATrouverElement.toLowerCase();
  if (aAccents.includes(motATrouverEltMin)) {
    return "a";
  }
  if (eAccents.includes(motATrouverEltMin)) {
    return "e";
  }
  if (iAccents.includes(motATrouverEltMin)) {
    return "i";
  }
  if (oAccents.includes(motATrouverEltMin)) {
    return "o";
  }
  if (uAccents.includes(motATrouverEltMin)) {
    return "u";
  }
  return motATrouverEltMin;
}

function sontLettresEgales(motATrouverElement, lettreTouche) {
  let lettreDuMot = removeAccent(motATrouverElement);
  let lettreToucheMin = lettreTouche.toLowerCase();
  return lettreDuMot === lettreToucheMin;
}

function afficherLettre(i, motATrouver) {
  listeEspaces = zoneMot.children;
  let lettre = motATrouver[i];
  
  // Si c'est un espace, afficher un espace visible avec style spécial
  if (lettre === " ") {
    listeEspaces.item(i).textContent = " ";
    listeEspaces.item(i).classList.add("space");
  } else {
    listeEspaces.item(i).textContent = lettre;
  }
}

async function gagnerPartie() {
  resultat.textContent = "Vous avez gagné!"
  for (let childNode of zoneClavier.childNodes){
    childNode.disabled = true;
}}

async function verifierLettre(motATrouver, lettreTouche) {
  let estLettreTrouvee = false;
  for (let i = 0; i < motATrouver.length; i++) {
    if (sontLettresEgales(motATrouver[i], lettreTouche)) {
      afficherLettre(i, motATrouver);
      estLettreTrouvee = true;
      nombreLettres--;
    }
  }
  if (nombreLettres === 0) {
    await gagnerPartie();
  }
  if (!estLettreTrouvee) {
    await avancerJeuMauvaiseReponse();
  }
}

function insererToucheClavier(lettre) {
  let toucheClavier = document.createElement("button");
  toucheClavier.textContent = lettre;
  toucheClavier.className = "touche-clavier";
  zoneClavier.append(toucheClavier);
}

function afficherClavier() {
  for (let lettre of lettres) {
    insererToucheClavier(lettre);
  }
}

async function choisirMot() {
  try {
    let list2JsonResponse = await fetch("json/list2.json");
    if (!list2JsonResponse.ok) {
      throw new Error(`HTTP error! status: ${list2JsonResponse.status}`);
    }
    let list2 = await list2JsonResponse.json();
    let randomNumber = Math.floor(Math.random() * list2.list.length);
    motATrouver = list2.list[randomNumber];
    console.log("Manga choisi aléatoirement:", motATrouver);
  } catch (error) {
    console.error("Erreur lors du chargement des mangas:", error);
    // Liste de mangas par défaut en cas d'erreur
    const mangas = [
      "naruto", "dragonball", "onepiece", "bleach", "attackontitan",
      "deathnote", "fullmetalalchemist", "myheroacademia", "demonlayer",
      "jujutsukaisen", "tokyoghoul", "hunterxhunter", "fairytail",
      "swordartonline", "blackclover", "vinlandsaga", "vagabond",
      "berserk", "onepunchman", "mobpsycho", "chainsawman", "spyxfamily"
    ];
    let randomNumber = Math.floor(Math.random() * mangas.length);
    motATrouver = mangas[randomNumber];
    console.log("Manga par défaut choisi:", motATrouver);
  }
}

function reinitialiserAffichage() {
  // Vider la zone du mot
  while (zoneMot.firstChild) {
    zoneMot.removeChild(zoneMot.firstChild);
  }
  
  // Vider et recréer le clavier
  while (zoneClavier.firstChild) {
    zoneClavier.removeChild(zoneClavier.firstChild);
  }
  afficherClavier();
  
  // Réactiver toutes les touches
  listeTouches = zoneClavier.children;
  for (let element of listeTouches) {
    element.disabled = false;
    // Supprimer les anciens écouteurs et en ajouter de nouveaux
    element.removeEventListener("click", handleToucheClick);
    element.addEventListener("click", handleToucheClick);
  }
  
  nombreErreurs.textContent = Number(0).toString();
  resultat.textContent = "";
}

async function handleToucheClick(event) {
  const element = event.target;
  element.disabled = true;
  await verifierLettre(motATrouver, element.innerText);
}

function ajoutEcouteursTouches() {
  boutonNouvellePartie.addEventListener("click", async () => {
    console.log("Bouton nouvelle partie cliqué");
    await startGame();
  });
  listeTouches = zoneClavier.children;
  for (let element of listeTouches) {
    element.addEventListener("click", handleToucheClick);
  }
}

async function startGame() {
  console.log("Démarrage d'une nouvelle partie");
  count = 1;
  reinitialiserAffichage();
  changerImage();
  await choisirMot();
  console.log("Mot choisi:", motATrouver);
  
  // Compter seulement les lettres (pas les espaces)
  nombreLettres = motATrouver.replace(/\s/g, '').length;
  
  afficherEspacesMot(motATrouver);
  console.log("Nouvelle partie démarrée");
}

function insererEspace(lettre) {
  let spaceElement = document.createElement("span");
  spaceElement.className = "espace-lettre";
  
  // Si c'est un espace, afficher un espace visible avec style spécial
  if (lettre === " ") {
    spaceElement.textContent = " ";
    spaceElement.classList.add("space");
  } else {
    spaceElement.textContent = "_";
  }
  
  zoneMot.append(spaceElement);
}

function afficherEspacesMot(word) {
  for (let indexLettre = 0; indexLettre < word.length; indexLettre++) {
    insererEspace(word[indexLettre]);
  }
}

function perdrePartie() {
  resultat.textContent = "Perdu! Le mot à trouver était : " + motATrouver;
  for (let childNode of zoneClavier.childNodes){
    childNode.disabled = true;
  }
}

async function avancerJeuMauvaiseReponse() {
  count += 1;
  changerImage();
  nombreErreurs.textContent = Number(count - 1).toString();
  if (count === 12) {
    changerImage();
    perdrePartie();
  }
}

function changerImage() {
  if (count <= 12) {
    imagePendu.setAttribute("src", "img/pendu" + count + ".jpg");
  } else {
    imagePendu.setAttribute("src", "img/pendu12.jpg");
  }
}

function initialiserElements() {
  imagePendu = document.getElementById("image-pendu");
  zoneMot = document.getElementById("zone-mot-pendu");
  zoneClavier = document.getElementById("clavier-pendu");
  nombreErreurs = document.getElementById("nbre-erreurs");
  boutonNouvellePartie = document.getElementById("bouton-nouvelle-partie");
  resultat = document.getElementById("resultat");
  
  // Vérification que tous les éléments sont trouvés
  console.log("Éléments initialisés:", {
    imagePendu: !!imagePendu,
    zoneMot: !!zoneMot,
    zoneClavier: !!zoneClavier,
    nombreErreurs: !!nombreErreurs,
    boutonNouvellePartie: !!boutonNouvellePartie,
    resultat: !!resultat
  });
}

function setUpGame() {
  console.log("Configuration du jeu...");
  initialiserElements();
  afficherClavier();
  ajoutEcouteursTouches();
  console.log("Jeu configuré avec succès");
}

// Attendre que le DOM soit chargé avant d'initialiser le jeu
document.addEventListener('DOMContentLoaded', async () => {
  setUpGame();
  await startGame();
});
