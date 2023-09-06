let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


// Select all sections and navigation links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Function to add or remove 'active' class from navigation links
function setActiveLink(id) {
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
}

// Scroll event listener
window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      setActiveLink(id);
    }
  });

  // Toggle 'sticky' class on the header
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
});

// Initialize Swiper slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
