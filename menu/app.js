const menuToggle = document.querySelector('.menuToogle');
const navigation = document.querySelector('.navigation');
const list = document.querySelectorAll('.list');

menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
})

function activeLink(){
    list.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach(item => item.addEventListener('click', activeLink));

