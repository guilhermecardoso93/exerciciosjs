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


var soma1 = document.getElementById('soma1');  
var soma2 = document.getElementById('soma2');
var btn = document.getElementById('btn');
var result = document.getElementById('resultado');

btn.addEventListener('click', function(){
  somatotal();
});    

function somatotal(){
 var soma1Val = parseInt(soma1.value);
 var soma2Val = parseInt(soma2.value);
 var soma = soma1Val + soma2Val;
   document.getElementById('resultado').value = soma;  
}