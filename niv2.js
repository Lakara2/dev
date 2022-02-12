//niveau 2
let cockpit = ["rocket",
    "boosters",
    "rocket",
    "boosters",
    "fire",
    "rocket"]

console.log("nombre de bouttons présents : " + cockpit.length)
function letgo(tableau) {

    for (let i = 0; i<tableau.length; i++){
        if (tableau[i][1] == 2)
        console.log(`bouton :${tableau[i][1]}`)
    }
    }
console.log(cockpit);
console.log(letgo(cockpit))