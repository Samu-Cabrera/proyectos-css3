const inputs = document.querySelectorAll('.inputs');
const btnsSiguiente = document.querySelectorAll('.btn__siguiente');
const btnsAnterior = document.querySelectorAll('.btn__anterior');

btnsSiguiente.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    console.log(`Siguiente ${index + 1}`);
    if (inputs[index + 1]) {
      inputs[index + 1].style.transform = 'translateX(0%)';
    }
  });
});

btnsAnterior.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (inputs[index + 1]) {
      inputs[index + 1].style.transform = 'translateX(120%)';
    }
    if (inputs[index + 2]) {
      inputs[index + 2].style.transform = 'translateX(260%)';
    }
  });
});
