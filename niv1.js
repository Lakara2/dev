//les couleurs disponible
let input = [6, "rouge", "marron", "jaune", "marron", "jaune", "jaune"]
let count = {}
//la boucle pour traverser le tableau
for (let i = 1; i < input.length; i++)
    if (input[i] in count) count[input[i]]++;
    else count[input[i]] = 1;
// trier le tableau
    let sorted = Object.values(count).sort((a, b) => b-a)
//prendre la premiere valeur (la couleur avec le plus grand nombre )
    let first = Object.keys(count).filter(key => count[key] == sorted[0])
//la seconde valeur (la couleur avec le second plus grand nombre)
let second = Object.keys(count).filter(key => count[key] == sorted[1])
console.log(first + "  " + second);
//le nombre de couleur dans le tableau
console.log(--input.length);