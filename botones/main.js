const btn = document.getElementById('btn-moderno2');

//calcular el top y left cuando le den click al boton
btn.addEventListener('click', function(e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let riples = document.createElement('span');
    riples.style.left = x + 'px';
    riples.style.top = y + 'px';
    this.appendChild(riples);

    setTimeout(() => {
        riples.remove();
    }, 1000);

});
