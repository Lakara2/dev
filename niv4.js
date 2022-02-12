//  let = feu > plante
//  let = feu > glace
//  let = eau > feu
//  let = plante > eau
//  let = plante > poison
//  let = plante > vol
//  let = sol > eau
//  let = sol > plante
let deck = { joueur1: 10, joueur2: 7}
console.log(deck.joueur1, deck.joueur2);
let liste = [
    ["plante", "bulbizarre", "herbizarre", "florizarre"],
    ["eau", "carapuce", "carabaffe", "tortank"],
    ["feu", "salameche", "reptincel", "draceaufeu"],
    ["poison", "abo", "arboks", "tadmorv", "grotadmorv"],
    ["vol", "roucoul", "roucoups", "roucarnage"],
    ["glace", "otari", "ramolos"],
]
    for (let l = 0; l < liste.length; l++) {
        console.log("il y a les pokemons : "+liste[l][1]+" , "+liste[l][2]+" , "+liste[l][3]);
console.log("de type :  " + liste[l][0]);}

// let plante = liste[0]
// let eau = liste[1];
// let feu = liste[2];
// let poison = liste[3];
// let vol = liste[4];
// let glace = liste[5];
