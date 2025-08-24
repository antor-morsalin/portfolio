let menuState = 'hidden';
    const menu = document.getElementById('menu');
    const menuItems = document.getElementById('menu-items');
    menu.addEventListener('click', () => {
      if (menuState === 'hidden') {
        menuState = 'visible';
        menuItems.classList = "fixed top-[60px] right-[30px] flex flex-col gap-3 shadow-[0_4px_20px_#d0baff] items-center rounded-lg self-end px-[15px] py-[20px] bg-white lg:hidden";
      } else if (menuState === 'visible') {
        menuState = 'hidden';
        menuItems.classList = "fixed top-[60px] right-[30px] hidden flex-col gap-3 shadow-[0_4px_20px_#d0baff] items-center  rounded-lg self-end px-[15px] py-[20px] bg-white lg:hidden";
      }
    })