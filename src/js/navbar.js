const menuContainer = document.getElementById('menu-container');
const menuButton = document.getElementById('menu-bar');
const desktopPages = document.getElementById('desktop-pages');

function expandMenu(focusFirstLink) {
  menuContainer.classList.remove('max-w-[140px]', 'h-[40px]');
  menuContainer.classList.add('max-w-md', 'h-[45px]');
  desktopPages.classList.replace('hidden', 'flex');
  menuButton.setAttribute('aria-expanded', 'true');
  menuButton.classList.add('hidden');
  if (focusFirstLink) desktopPages.querySelector('a').focus();
}

menuContainer.addEventListener('pointerenter', (event) => {
  if (event.pointerType === 'mouse') expandMenu(document.activeElement === menuButton);
});
menuButton.addEventListener('click', () => expandMenu(true));

const mobileMenus = document.querySelectorAll('details[name="mobile-navigation"]');
function closeOtherMenus(event) {
  for (const menu of mobileMenus) {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  }
}
document.addEventListener('click', closeOtherMenus);
document.addEventListener('focusin', closeOtherMenus);

function closeAndFocus(menu) {
  menu.open = false;
  menu.querySelector('summary').focus();
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const openMenu = document.querySelector('details[name="mobile-navigation"][open]');
    if (openMenu) closeAndFocus(openMenu);
  }
});
