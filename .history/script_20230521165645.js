function multi(numb1, number2) {
  console.log(numb1 * number2);
}

function desc(n){
  console.log((n* 0.05))
}

function age(year) {
  var data = new Date();
  var actualYear = data. getFullYear();
  
  const diference = actualYear - year 

  if(diference <= 18 && diference >= 0) {
    return console.log('Você é menor de idade', diference)
  } else {
    return console.log('Você é maior de idade', diference)
  }
}

const divResultado = document.getElementById('resultado')

divResultado.innerHTML = 'Repetição'

divResultado.innerHTML = 'Repetição'.repeat(2);

var repeticao = '';

for (var i = 0; i < 20; i++) {
  repeticao += 'Repetição ';
}
divResultado.textContent = repeticao;

var contador = 0;
/*while (contador < 5) {
  repeticao += 'Repetição ';
  contador++;
}

divResultado.textContent = repeticao; */

do {
  repeticao += 'Repetição ';
  contador++;
} while (contador < 5);

divResultado.textContent = repeticao;

var numeros = '';

for (var i = 0; i <= 10; i++) {
  numeros += i + ' ';
}

divResultado.textContent = numeros;

var numerosPares = '';

for (var i = 0; i <= 20; i += 2) {
  numerosPares += i + ' ';
}

divResultado.textContent = numerosPares;


var tabuadaDiv = document.getElementById('tabuadaDiv');

function tabuada(){
  var num = parseInt(document.getElementById("num").value);
  var resposta = document.getElementById('resposta');
  var tabuada='';

  for(var count=1; count<=10 ; count++)
   tabuada += num+" x "+count+" = "+
               num*count+"<br />";
  
  resposta.innerHTML = tabuada;
}

function verificaCaracteresDota(texto) {
  var padrao = /dota/i; // 'dota' com a flag 'i' torna a busca case-insensitive
  return padrao.test(texto);
}

var texto1 = 'Dota é melhor que LOL';
console.log(verificaCaracteresDota(texto1)); // true

var texto2 = 'Lol é melhor que CS';
console.log(verificaCaracteresDota(texto2)); // false


alert(Math.floor(Math.random() * 100) + 1)

function verificarNumero() {
  var numeroInserido = parseInt(prompt("Digite um número entre 1 e 100:"));

  if (numeroInserido === numeroAleatorio) {
    alert("Parabéns! Você acertou o número!");
  } else {
    alert("Infelizmente, você errou. O número correto era: " + numeroAleatorio);
  }
}