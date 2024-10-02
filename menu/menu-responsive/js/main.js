const listItem = document.querySelectorAll('li');
const sidebar = document.querySelector('.sidebar');
const menuBtn = document.querySelector('.menu__btn');

listItem.forEach((item) => {
  item.addEventListener('click', () => {
    const subMenu = item.querySelector('.sub__menu');
    const isActive = item.classList.contains('active');

    listItem.forEach((li) => {
      const otherSubMenu = li.querySelector('.sub__menu');
      if (otherSubMenu) {
        otherSubMenu.style.display = 'none';
      }
      li.classList.remove('active');
    });

    if (!isActive && subMenu) {
      subMenu.style.display = 'block';
      item.classList.add('active');
    }
  });
});

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
