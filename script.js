// Exercici 2
var numUsuari = prompt("Nùmero: ");
document.getElementById("ex2").innerHTML += "<p>El valor verificat per isFinite() és: " + isFinite(numUsuari) + "</p>";
document.getElementById("ex2").innerHTML += "<p>El valor verificat per isNan() és: " + isNaN(numUsuari) + "</p>";
document.getElementById("ex2").innerHTML += "<p>El valor verificat per Number() és: " + Number(numUsuari) + "</p>";
document.getElementById("ex2").innerHTML += "<p>El valor verificat per String() és: " + String(numUsuari) + "</p>";
document.getElementById("ex2").innerHTML += "<p>El valor verificat per parseInt() és: " + parseInt(numUsuari) + "</p>";
document.getElementById("ex2").innerHTML += "<p>El valor verificat per parseFloat() és: " + parseFloat(numUsuari) + "</p>";
document.getElementById("ex2").innerHTML += "<p>El valor verificat per Date() és: " + Date(numUsuari) + "</p>";

if (isNaN(numUsuari) == false) { //Sí es NaN no és cap número -> Caracter Lletra Especial else num 1
  if (isFinite(numUsuari) == true) { //Si no és finit sabrem que ñes un número infinit -> else num 2
    if (parseInt(numUsuari) === Number(numUsuari)) {
      document.getElementById("ex2").innerHTML += "<p>El valor introduït és Numèric i enter.</p>";
    } else {
      document.getElementById("ex2").innerHTML += "<p>El valor introduït és Númeric i decimal.</p>";
    }
  } else {//else num 2
    document.getElementById("ex2").innerHTML += "<p>El valor introduït és Númeric infinit.</p>";
  }
} else { //else num1
  document.getElementById("ex2").innerHTML += "<p>El valor introduït és una lletra o caràcter especial.</p>";
}

// Exercici 3
function codificaVocals() {
  var vocals = new Array("à", "À", "è", "é", "È", "É", "í", "Í", "ò", "ó", "Ò", "Ó", "ú", "Ú");
  var vocalsHex = new Array(vocals.length);
  var vocalsDec = new Array(vocals.length);
  for (var i = 0; i < vocals.length; i++) {
    vocalsHex[i] = escape(vocals[i]).replace("%", ""); //Utilizem el replace per esborrar els % que retorna la funció escape
    vocalsDec[i] = parseInt(vocalsHex[i], 16);
    document.getElementById("vocals").innerHTML += "<tr><td>" + vocals[i] + "</td><td>" + vocalsHex[i] + "</td><td>" + vocalsDec[i] + "</td></tr>";
  }
}

// Exercici 4
function ferOperacio() {
  var operacio = document.getElementById("operacio").value;
  if (validAritmetic(operacio) == false) {
    document.getElementById("result").innerHTML = "<div class='alert alert-danger'><p>Introdueix una operació vàlida.</p></div>";
  } else { //Si l'expressió és correcte la calculem amb la funció eval
    var resultat = eval(operacio);
    document.getElementById("result").innerHTML = "<div class='alert alert-success'><p>El resultat de l'expressió " + operacio + " és: <strong>" + resultat + "</strong></div>";
  }
}

/*
La funció ens valida una regular expression, i amb test() ens retorna un boolea amb true si la regular expression és correcte o fals sí és incorrecte.
Al passar l'operacio introduïda per l'usuari per paràmetre amb test(operacio) comprovem que aquesta operació sol estigui formada per un número del 0-9 i sol contingui els operadors
+ - * / i els parèntesis ()
*/
function validAritmetic(operacio) {
  return /[0-9()+\-*x/.]/.test(operacio);
}
