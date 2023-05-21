function multi(numb1, number2) {
  console.log(numb1 * number2);
}

function desc(n){
  console.log((n* 0.05))
}

function age(year) {
  const diference = year - 2023

  if(diference <= 18 && diference >= 0) {
    return console.log('Você é menor de idade')
  } else {
    return console.log('Você é maior de idade')
  }
}