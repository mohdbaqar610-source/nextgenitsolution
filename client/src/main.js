import { privacyPolicyContent } from './privacy-content.js';

const menuToggle = document.querySelector('#menuToggle');
const mainNav = document.querySelector('#mainNav');

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  const icon = menuToggle.querySelector('use');
  if (icon) icon.setAttribute('href', isOpen ? '#icon-close' : '#icon-menu');
});

document.querySelectorAll('#mainNav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    const icon = menuToggle?.querySelector('use');
    if (icon) icon.setAttribute('href', '#icon-menu');
  });
});

const revealElements = document.querySelectorAll('[data-reveal]');
const reveal = () => {
  revealElements.forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight * 0.86) element.classList.add('is-visible');
  });
};
reveal();
window.addEventListener('scroll', reveal, { passive: true });

const privacyView = document.querySelector('#privacyPolicyView');
const homeShell = document.querySelector('.page-shell');
const isPrivacyLocation = () => window.location.pathname.endsWith('/privacy.html') || window.location.hash === '#privacy-policy';

const renderPrivacyRoute = () => {
  if (!privacyView || !homeShell) return;
  const showPrivacy = isPrivacyLocation();
  privacyView.hidden = !showPrivacy;
  homeShell.hidden = showPrivacy;
  document.title = showPrivacy ? 'Privacy Policy — nextgenitsolution' : 'nextgenitsolution — Secure your next move';
  if (showPrivacy && !privacyView.innerHTML) {
    privacyView.innerHTML = privacyPolicyContent.replace('href="#top"', 'href="./index.html"');
  }
  if (showPrivacy) window.scrollTo({ top: 0, behavior: 'auto' });
};

renderPrivacyRoute();
window.addEventListener('hashchange', renderPrivacyRoute);

const contactForm = document.querySelector('#contactForm');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(contactForm);
  const subject = encodeURIComponent(`New nextgenitsolution enquiry from ${form.get('name') || 'website visitor'}`);
  const body = encodeURIComponent(`Name: ${form.get('name') || ''}\nEmail: ${form.get('email') || ''}\nMessage: ${form.get('message') || ''}`);
  window.location.href = `mailto:Cyber558278@gmail.com?subject=${subject}&body=${body}`;
  const note = document.querySelector('#formNote');
  if (note) note.hidden = false;
});
