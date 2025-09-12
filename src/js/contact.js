const contactContainer = document.getElementById('contact-container');
const contactList = document.querySelectorAll('.contact-list');

contactContainer.addEventListener('mouseenter', ()=>{
    contactList.forEach(item => item.classList.remove('hidden'));
})

// contactContainer.addEventListener('mouseleave', ()=>{
//     contactList.forEach(item => item.classList.add('hidden'));
// })

const contactContainerMobile = document.getElementById('contact-container-mobile');
const contactListMobile = document.querySelectorAll('.contact-list-mobile');

let contactvisible = false ;

contactContainerMobile.addEventListener('click', (e)=>{
    if(!contactvisible)
    {
        contactListMobile.forEach(item => item.classList.remove('hidden')); 
    }
    else 
    {
        contactListMobile.forEach(item => item.classList.add('hidden'));
    }
    contactvisible = !contactvisible; 
    e.stopPropagation()
})

document.body.addEventListener('click', ()=>{
    if(contactvisible)
    {
        contactListMobile.forEach(item => item.classList.add('hidden'));
        contactvisible = !contactvisible; 
    }
})
