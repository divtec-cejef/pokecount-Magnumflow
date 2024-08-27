/**
 * Fichier JavaScript pour l'application PokeCount.
 * @author Diego Lovera
 * @version 0.1 (Version actuelle)
 * @since 2024-08-20 (Date de création)
 */
"use strict";

let compteur = 0;
const compteurEl = document.getElementById("compteur-el");
const sauvegardeEl = document.getElementById("sauvegarde-el");
const capturerBtn = document.getElementById("capturer-btn");
const sauvegardBtn = document.getElementById("sauvegarder-btn");
const resetBtn = document.getElementById("reset-btn");
document.getElementById("capturer-btn")
capturerBtn.addEventListener("click", capturer);
sauvegardBtn.addEventListener("click", sauvegarder);
resetBtn.addEventListener("click", reset);
window.addEventListener("load", charge)
function capturer() {
    compteur++;
    compteurEl.textContent = compteur;
    if(compteur < 5) {
        compteurEl.style.color = "green";
    } else if (compteur < 10) {
        compteurEl.style.color = "yellow";
    } else {
        compteurEl.style.color = "red";
    }
}
function sauvegarder() {
    sauvegardeEl.innerHTML += `<li>${compteur} Pokémons</li>`;
    localStorage.setItem("captures", sauvegardeEl.innerHTML);
    compteur = 0;
    compteurEl.textContent = compteur;
}

function reset() {
    localStorage.clear();
    window.location.reload();
}

function charge() {
        sauvegardeEl.innerHTML = localStorage.getItem("captures") || "Mes captures : ";
}