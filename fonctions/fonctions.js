
//Exercice:
// Créer une fontion afficheTableau.
// Elle prend en paramètre un tableau.
// Elle affiche chaque élément du tableau.

// Executer la fonction deux fois avec deux tableaux différents
function afficheTableau(tableau) {
    for (let i = 0; i < tableau.length; i++) {
        console.log(tableau[i]);
    }
}
afficheTableau(["HTML", "CSS", "JS"]);

let tab1 = ["musique", "dessin"];
afficheTableau(tab1);