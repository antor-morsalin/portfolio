const menuBar = document.getElementById('menu-bar');

const menuContainer = document.getElementById('menu-container');

let menuvisible = false

menuContainer.addEventListener('mouseenter', () => {

    menuContainer.innerHTML = `<a class=" text-sm text-white px-3 hover:scale-105 hover:tracking-wide active:scale-95 active:text-gray-300 transition-all duration-300 menu-items" href="index.html">Home</a>
      <a class=" text-sm text-white px-3 hover:scale-105 hover:tracking-wide active:scale-95 active:text-gray-300 transition-all duration-300 menu-items" href="skill_set.html">Skills</a>
      <a class=" text-sm text-white px-3 hover:scale-105 hover:tracking-wide active:scale-95 active:text-gray-300 transition-all duration-300 menu-items" href="projects.html">Projects</a>
      <a class=" text-sm text-white px-3 hover:scale-105 hover:tracking-wide active:scale-95 active:text-gray-300 transition-all duration-300 menu-items" href="academics.html">Academics</a>`
    
    menuContainer.classList.remove('max-w-[140px]');
    menuContainer.classList.remove('h-[40px]');
    menuContainer.classList.add('h-[45px]');
    menuContainer.classList.add('max-w-md');
 
});

// menuContainer.addEventListener('mouseleave', () => {
//    menuItems.forEach(item => item.classList.add('hidden'));
//     menuContainer.classList.remove('max-w-xl');
//     menuContainer.classList.add('max-w-[140px]');
//     menuContainer.classList.add('h-[40px]');
//     menuContainer.classList.remove('h-[45px]');
//     menuBar.classList.remove('hidden');
// });





const menuBarMobile = document.getElementById('menu-bar-mobile');
const menuItemsMobile = document.querySelectorAll('.menu-items-mobile');
const menuContainerMobile = document.getElementById('menu-container-mobile');



menuContainerMobile.addEventListener('click', (e) => {
    if(!menuvisible)
    {
        menuItemsMobile.forEach(item => item.classList.remove('hidden'));
    }
    else 
    {
        menuItemsMobile.forEach(item => item.classList.add('hidden'));
    } 
    menuvisible = !menuvisible ;
    e.stopPropagation()
});

document.body.addEventListener('click', ()=>{
    if(menuvisible)
    {
        menuItemsMobile.forEach(item => item.classList.add('hidden'));
        menuvisible = !contactvisible; 
    }
})


