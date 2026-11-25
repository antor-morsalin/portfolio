const contactContainer = document.getElementById('contact-container');
const contactButton = document.getElementById('contact-button');
const contactLinks = document.getElementById('contact-links');

function showContactLinks() {
  contactLinks.classList.replace('hidden', 'flex');
  contactButton.setAttribute('aria-expanded', 'true');
}

contactContainer.addEventListener('pointerenter', (event) => {
  if (event.pointerType === 'mouse') showContactLinks();
});
contactButton.addEventListener('click', showContactLinks);
