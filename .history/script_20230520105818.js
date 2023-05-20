alert('Hello World!');
alert(2 + 2 )

let inputValue = document.getElementById('name').value
const buttonShowName = document.getElementById('exibir-nome')


buttonShowName.addEventListener('click', () => {
  alert(`Meu nome Completo é ${inputValue}`)

})
