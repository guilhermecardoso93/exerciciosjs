alert('Hello World!');
const conta = `valor de 2 + 2 é`
alert(`${conta} ${2 + 2}` )

const buttonShowName = document.getElementById('exibir-nome')


buttonShowName.addEventListener('click', () => {
  const inputValue = document.getElementById('name').value;
  const inputValueNameLength = document.getElementById('name-length').value.length;
  alert(`Meu nome Completo é ${inputValue}`)

})

