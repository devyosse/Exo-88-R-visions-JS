let button = document.getElementById('button');
let tableau = [];
let resultat = document.getElementById('resultat');
let button2 = document.getElementById('button1');
let button3 = document.getElementById('affiche');
let button4 = document.getElementById('deleteall');
let para = document.getElementById('p');
let input = document.getElementById('input');

button.addEventListener('click', function () {
    tableau.push(input.value);
    console.log(tableau);
    if(tableau.length < 10){
        resultat.innerHTML = "Entrez au moins 10 valeurs";
    }
    else if (tableau.length === 5){
        resultat.innerHTML = tableau[4];
    }
    else if (tableau.length === 10) {
        resultat.innerHTML = tableau[Math.trunc(Math.random() * 10)];
    }
})

button2.addEventListener('click', function (){
    if(tableau.length > 5){
      document.getElementById('aleatoire').innerHTML = tableau[Math.floor(Math.random() * tableau.length)];
    }
})

button3.addEventListener('click', function (){
  for(let i = 0; i < tableau.length; i++){
      para.innerHTML += tableau[i];
  }
})

