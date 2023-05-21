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
divResultado.innerHTML = 'Repetição'.repeat(3);
