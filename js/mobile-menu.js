(() => {
  const menuRefs = {
    menuBtn: document.querySelector('[data-menu-button]'),
    menu: document.querySelector('[data-menu]'),
    menuLink: document.querySelectorAll('[data-menu-link]'),
  };

  menuRefs.menuBtn.addEventListener('click', toggleMenu);
  menuRefs.menuLink.forEach(element => {
    element.addEventListener('click', toggleMenu);
  });

  function toggleMenu() {
    if (document.documentElement.clientWidth >= 1600) return;
    const expanded = menuRefs.menuBtn.getAttribute('aria-expanded') === 'true' || false;
    menuRefs.menuBtn.setAttribute('aria-expanded', !expanded);

    menuRefs.menuBtn.classList.toggle('is-open');
    menuRefs.menuBtn.blur();
    menuRefs.menu.classList.toggle('is-open');
    document.body.classList.toggle('modal-is-open');
  }
})();
