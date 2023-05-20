//alert('Hello World!');
const conta = `valor de 2 + 2 é`
//alert(`${conta} ${2 + 2}` )

const buttonShowName = document.getElementById('exibir-nome')

buttonShowName.addEventListener('click', () => {
  const inputValue = document.getElementById('name').value;
  alert(`Meu nome Completo é ${inputValue}`)
  alert(`A quantidade de letras no seu nome é de ${inputValue.length}`)
})

function turnOnOff(){
  const image = document.getElementById('lamp').src
  const lampOn = 'https://www.w3schools.com/js/pic_bulbon.gif'
  const lampOff = 'https://www.w3schools.com/js/pic_bulboff.gif'

  if(image === lampOn ) {
    document.getElementById('lamp').src = lampOn
  } else {
    document.getElementById('lamp').src = lampOff
  }
}
document.getElementById("lamp").addEventListener("click", turnOnOff);
