const prompt = require("prompt-sync")();
let tirage = [5, 3, 3, 4, 9, 9, 9, 9, 9,6]
let GS = {}
let nombre = tirage.length
let tirer = +prompt("quel est vorte chiffre a miser ? ")
console.log("le nombre de tirage est :" + nombre);

function carte() {
    //  let GS = le chiffre le plus répéter
    for (let i = 0; i < tirage.length; i++) {
        if (tirage[i] == tirage[i + 1]) {
            GS = (tirage[i]++);
        }
    }
}


function get() {

    for (let i = 1; i < tirage.length; i++)
        if (tirage[i] in GS) GS[tirage[i]]++;
        else GS[tirage[i]] = 1;
    let sorted = Object.values(GS).sort((a, b) => b-a)
    let first = Object.entries(GS).filter(key => GS[key] == sorted[0])

    }


get()
carte();
console.log("le chiffre le plus répéter est : " + GS);
function game() {
    if (tirer === GS) console.log("vous gagnez ");
    else console.log("vous perdez ")
}

console.log("le GS se répète "+tirage[GS.length-1]+" fois");
game();