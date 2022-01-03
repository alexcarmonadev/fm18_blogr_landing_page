const btnMenu = document.getElementById('hamburguer');
const menu = document.getElementById('header-menu');
const btnSubMenu = document.querySelectorAll('.main-menu__link');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
  btnMenu.classList.toggle('cross');
  document.body.classList.toggle('no-scroll');
});

for (let i = 0; i < btnSubMenu.length; i++) {
  btnSubMenu[i].addEventListener('click', function () {
    if (window.innerWidth <= 750) {
      const showSubMenu = this.nextElementSibling;
      showSubMenu.classList.toggle('dropdown-show');

      const arrowrotate =
        showSubMenu.parentNode.firstElementChild.firstElementChild;
      arrowrotate.classList.toggle('arrow-rotate');

      const hideSubMenu =
        this.parentElement.nextElementSibling.firstElementChild
          .nextElementSibling ||
        this.parentElement.nextElementSibling.nextElementSibling
          .firstElementChild;
      hideSubMenu.classList.remove('dropdown-show');
    }
  });
}

for (let i = 0; i < btnSubMenu.length; i++) {
  btnSubMenu[i].addEventListener('click', function () {
    if (window.innerWidth > 750) {
      const showSubMenu2 = this.nextElementSibling;
      showSubMenu2.classList.toggle('dropdown-show');

      const arrowrotate =
        showSubMenu2.parentNode.firstElementChild.firstElementChild;
      arrowrotate.classList.toggle('arrow-rotate');

      const hideSubMenu =
        this.parentElement.nextElementSibling.firstElementChild
          .nextElementSibling ||
        this.parentElement.nextElementSibling.nextElementSibling
          .firstElementChild;
      hideSubMenu.classList.remove('dropdown-show');
    }
  });
}
