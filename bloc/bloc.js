let cours = ["HTML", "CSS", "Javascript","php"];

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

//Exercice:
//Utiliser la boucle for pour afficher tout les éléments du tableau cours:
for (let index = 0; index < cours.length; index++) {
  console.log(cours[index]);
}

//CTRL + fleche -> bouger de mot en mot
// CTRL + SHIFHT + fleche -> Séléctionner des du texte

//Ctrl + alt + fleche -> Dupliquer
//Alt + fleche -> Bouger un du texte
//Ctrl + X -> couper (copier et Supprimer)

// Ctrl + P -> Changer de fichier
//ctrl + tab -> La liste des tab ouvertes

//Exercice:
//Utiliser la boucle for, pour afficher les nombres pairs entre 0 et 20.
console.log("*************");
// for (let h = 0; h < 20; h++) {
//   if(h%2 == 0) {
//     console.log(h);
//   }
// }

for (let h = 0; h <= 10; h++) {
    console.log(h*2);
}

for (let h = 0; h <= 20; h = h + 2 ) {
    console.log(h);
}

// let nombres = prompt("Entrez nombre pair");

// while (nombres % 2 !== 0) {
//   nombres = prompt("Entrez nombre pair");
// }

// console.log(nombres);

//Les conditions:
let isPermis = true;
let isCar = false;
if(isPermis && isCar){
  console.log('Vous pouvez conduire')
}else{
  console.log('Vous ne pouvez pas conduire')
}

//Opérateur ternaire:
// (conditions) ? si vrai : si faux

console.log( isPermis && isCar ? 'Vous pouvez conduire' : 'Vous ne pouvez pas conduire');

isPermis && isCar ? console.log('Vous pouvez conduire') : console.log('Vous ne pouvez pas conduire');



//
const d = new Date();

let day = d.getDay();

switch(day){
  case 1 :
    console.log("lundi")
    break;
  case 2 :
    console.log("Mardi")
    break;
  case 3 :
    console.log("Mercredi")
    break;
  case 4 :
    console.log("Jeudi")
    break;
  case 5 :
    console.log("Vendredi")
    break;
  case 6 :
  case 0 :
    console.log('week end');
    break;
  default:
    console.log('Jour inconnu');
}