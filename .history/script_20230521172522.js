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


var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

function verificarNumero() {
  var numeroInserido = parseInt(prompt("Digite um número entre 1 e 100:"));

  if (numeroInserido === numeroAleatorio) {
    alert("Parabéns! Você acertou o número!");
  } else {
    alert("Infelizmente, você errou. O número correto era: " + numeroAleatorio);
  }
}

var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth() + 1; // Lembrando que o mês começa em 0
var ano = dataAtual.getFullYear();

var dataFormatada = dia + '/' + mes + '/' + ano;

console.log(dataFormatada);

var proximoMes = mes + 1;
if (proximoMes > 12) {
  proximoMes = 1;
  ano++;
}

console.log("Próximo mês: " + proximoMes + '/' + ano);

var deuses = ['Aegir', 'Aud', 'Balder']

console.log(deuses.length)

deuses.forEach(function(deus) {
  console.log(deus);
});

 /*
deuses.map(function(deus) {
  alert(deus);
});

// Usando a função de callback reduce()
deuses.reduce(function(_, deus) {
  alert(deus);
});

// Usando a função de callback filter()
deuses.filter(function(deus) {
  alert(deus);
}); */

deuses.push('Loki', 'Odin', 'Frey')
console.log(deuses)
console.log(deuses.length)

var numbers = [5, 7, 1, 8, 9]

console.log(numbers.sort())

var ul = document.getElementById('nomes');

deuses.forEach(deus => {
  var li = document.createElement('li');
  li.textContent = deus;
  ul.appendChild(li);
})


var arrayTexto = [];

function adicionarTexto() {
  var input = document.getElementById('inputTexto');
  var texto = input.value;

  arrayTexto.push(texto);
  input.value = '';

  exibirLista();
}

function exibirLista() {
  var ul = document.getElementById('lista');
  ul.innerHTML = '';

  arrayTexto.forEach(function(texto) {
    var li = document.createElement('li');
    li.textContent = texto;

    if (isNumeroPar(texto)) {
      li.classList.add('par');
    }

    ul.appendChild(li);
  });
}

function isNumeroPar(texto) {
  var numero = parseInt(texto);
  return !isNaN(numero) && numero % 2 === 0;
}

var contadorElement = document.getElementById('contador');
var contador = 0;
var preto = true;

function iniciarContador() {
  contador = 0;
  preto = true;
  exibirNumero();
  setInterval(alternarCor, 1000);
}

function exibirNumero() {
  contadorElement.textContent = contador;
}

function alternarCor() {
  preto = !preto;
  if (preto) {
    contadorElement.style.color = 'black';
  } else {
    contadorElement.style.color = 'white';
  }
  
  if (contador < 5) {
    contador++;
    exibirNumero();
  }
}

