function multi(numb1, number2) {
  console.log(numb1 * number2);
}

function desc(n){
  console.log((n* 0.05))
}

function age(year) {
  const diference = 2023 - year 

  if(diference <= 18 && diference >= 0) {
    return console.log('Você é menor de idade', diference)
  } else {
    return console.log('Você é maior de idade', diference)
  }
}