//const prompt = require("prompt-sync")();
//niveau 1
//function caps (){
//let D = +prompt("masse d'ergol nécessaire en kg : ")
//let L = +prompt("distance totale du voyage en UA : ")
//return (D + L * 5);
//}


//LOL
let input = [6, "rouge", "marron", "jaune", "marron", "jaune", "jaune"]
let count = {}

for (let i = 1; i < input.length; i++)
    if (input[i] in count) count[input[i]]++;
    else count[input[i]] = 1;
let sorted = Object.values(count).sort((a, b) => b-a)
let first = Object.keys(count).filter(key => count[key] == sorted[0])
let second = Object.keys(count).filter(key => count[key] == sorted[1])
console.log(first + "  " + second);