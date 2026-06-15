// ===========================
// NAVBAR - change background when scrolling
// ===========================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// ===========================
// HAMBURGER MENU - for mobile
// ===========================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', function() {
  navLinks.classList.toggle('open');
});

// close nav when a link is clicked on mobile
navLinks.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    navLinks.classList.remove('open');
  });
});


// ===========================
// CONTACT FORM - basic validation and feedback
// ===========================
const sendBtn = document.getElementById('send-btn');
const formFeedback = document.getElementById('form-feedback');

sendBtn.addEventListener('click', function() {
  const name = document.getElementById('name-input').value.trim();
  const phone = document.getElementById('phone-input').value.trim();
  const service = document.getElementById('service-select').value;
  const message = document.getElementById('message-input').value.trim();

  // check if fields are empty
  if (name === '' || phone === '' || service === '') {
    formFeedback.style.color = '#e05555';
    formFeedback.textContent = 'Please fill in your name, phone, and service.';
    return;
  }

  // if everything looks good
  formFeedback.style.color = '#C9A84C';
  formFeedback.textContent = 'Message sent! We will get back to you shortly.';

  // clear the form
  document.getElementById('name-input').value = '';
  document.getElementById('phone-input').value = '';
  document.getElementById('service-select').value = '';
  document.getElementById('message-input').value = '';
});


// ===========================
// SCROLL ANIMATION - fade in sections as you scroll
// ===========================
const sections = document.querySelectorAll('section');

// set them all invisible to start
sections.forEach(function(section) {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

function checkVisibility() {
  sections.forEach(function(section) {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100;

    if (isVisible) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
}

// run once on load so the first section shows
checkVisibility();

// then run every time the user scrolls
window.addEventListener('scroll', checkVisibility);