alert('Hello World!');
alert(2 + 2 )

const buttonShowName = document.getElementById('exibir-nome')


buttonShowName.addEventListener('click', () => {
  const inputValue = document.getElementById('name').value;

  alert(`Meu nome Completo é ${inputValue}`)

})
