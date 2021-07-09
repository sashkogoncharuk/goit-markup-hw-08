(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mobile-open'),
    closeMenuBtn: document.querySelector('.mobile-close'),
    menu: document.querySelector('.mobile'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();