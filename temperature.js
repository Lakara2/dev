
//les temperatures trouver dans le diagramme
let tab = ["1","2","5","-10000","-9","-1"]
//nombre de temperature present
let n = tab.length
//e = elemnet de la temperature
function temperature(e) {
    if (e.length == "" )return 0;
    if (e.length != ""){
    for (let i = 0; i < e.length; i++) {
        //math.abs pour prendre la plus petite temperature
Math.abs(e[i])
//trier les elements pour qu'ils soient tous positif et RETOURNER LE PLUS PETIT
e.sort()
    return e[0];
    } 
    } 
}
console.log("il y a "+ n + " temperatures ");
console.log(temperature(tab)+ " est le plus proche de 0");