(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mobile--open'),
    closeMenuBtn: document.querySelector('.mobile--close'),
    menu: document.querySelector('.menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('closed');
  }
})();