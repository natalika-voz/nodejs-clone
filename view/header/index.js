const toggleMenuButton = document.querySelector('.header__toggle-menu');

toggleMenuButton.addEventListener("click", () => {
  document.body.classList.toggle('mobile-menu-opened');
});

