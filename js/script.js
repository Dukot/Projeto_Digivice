const switcher = document.querySelector('#botao-alterar-tema');

switcher.addEventListener('click', () => {
  document.body.classList.toggle('modo-escuro');

  const className = document.body.className;
    if (className === '') {
        this.textContent = 'modo-escuro';
    }
});