  $(document).ready(function () {
    // ESERCIZIO JS SNACK 1
 const bici = [
   {
     name : 'atala',
     peso : 12
   },
   {
     name : 'bianchi',
     peso : 10
   },
   {
     name : 'scott',
     peso : 7
   }
 ];

 let bicileggera = bici[0];

 for (var i = 1; i < bici.length; i++) {
   if ( bici[i].peso < bicileggera.peso) {
     bicileggera = bici[i];
   }
 }
console.log(bicileggera);

const{name,peso} = bicileggera ;
console.log( `Tra le selezionate la bici più leggera è ${name} , il suo peso è: ${peso} kg`)
document.getElementById('output').innerHTML = `ESERCIZIO 1: <br>
Tra le selezionate la bici più leggera è ${name} , il suo peso è: ${peso} kg`

// ESERCIZIO JS SNACK 2
const squadre = [
  {
    nome : 'Roma',
    punti : 0 ,
    falli : 0
  },
  {
    nome : 'Cagliari',
    punti : 0 ,
    falli : 0
  },
  {
    nome : 'Palermo',
    punti : 0 ,
    falli : 0
  },

]
for (let i = 0; i < squadre.length; i++) {
  squadre[i].punti = randomNumberInRange(0, 100);
  squadre[i].falli = randomNumberInRange(0, 100);
}
console.log(squadre);
const nuovidati = [];
for (let i = 0; i < squadre.length; i++) {
  const{nome, falli} = squadre[i];
  nuovidati.push(nome, falli);
}

console.log(nuovidati);





//FUNZIONE GENERA PUNTI E FALLI
function randomNumberInRange(min, maxNumber){
  if (isNaN(min) || isNaN(maxNumber) ) {
    console.log("questi non sono numeri");
  }
  else {
    return Math.floor(Math.random() * (maxNumber - min + 1)) + min ;
  }
}



}
);
