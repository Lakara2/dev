//les elements du tableau sont des tableau
//du coup le premier tableau est l'index 0 du grand tableau
let tab = [
    ["Bleu", 4],
    ["Rouge", 1],
    ["Jaune", 2]
]
//verifier tout les tableaux pour voir si les tableaux sont croissantes ou decroissantes
function bof (table) {
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < tab.length; j++) {
            if (a.table[j] < b.table[i])
                return 1;
            if (a.table[j] > b.table[i])
                return -1;
        }
    }
}