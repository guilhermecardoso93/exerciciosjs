//alert('Hello World!');
const conta = `valor de 2 + 2 é`;
//alert(`${conta} ${2 + 2}` )

const buttonShowName = document.getElementById("exibir-nome");

buttonShowName.addEventListener("click", () => {
  const inputValue = document.getElementById("name").value;
  alert(`Meu nome Completo é ${inputValue}`);
  alert(`A quantidade de letras no seu nome é de ${inputValue.length}`);
});

function turnOnOff() {
  var image = document.getElementById("lamp").src;
  var lampOn = "https://www.w3schools.com/js/pic_bulbon.gif";
  var lampOff = "https://www.w3schools.com/js/pic_bulboff.gif";

  if (image == lampOn) {
    document.getElementById("lamp").src = lampOff;
  } else {
    document.getElementById("lamp").src = lampOn;
  }
}
document.getElementById("lamp").addEventListener("mouseover", turnOnOff);
//document.getElementById("lamp").addEventListener("click", turnOnOff);

const buttonShowFullName = document.getElementById("exibir-nome-convidado");

buttonShowFullName.addEventListener("click", () => {
  const inputValueName = document.getElementById("name-2").value;
  const inputValueFullName = document.getElementById("fullname").value;
  alert(`Meu nome Completo é ${inputValueName} ${inputValueFullName}`);
});

const cpf = document.querySelector("#cpf");

cpf.addEventListener("keyup", () => {
  let value = cpf.value
    .replace(/[^0-9]/g, "")
    .replace(/^([\d]{3})([\d]{3})?([\d]{3})?([\d]{2})?/, "$1.$2.$3-$4");

  cpf.value = value;
});

  let number1 = document.getElementById("number-1");
  let number2 = document.getElementById("number-2");
  const resultField = document.getElementById("result");
  const buttonSomar = document.getElementById("buttonSoma");

  number1 = parseInt(number1.value);
  number2 = parseInt(number2.value);

  buttonSomar.addEventListener("click", () => {
    somaTotal();
  });

function somaTotal() {
  const soma = number1 + number2
  document.getElementById('result').value = soma
}
