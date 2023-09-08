document.addEventListener('DOMContentLoaded', function () {
  // Menu Icon Toggle
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  });

  // Select all sections and navigation links
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');

  // Function to add or remove 'active' class from navigation links
  function setActiveLink(id) {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
  }

  // Scroll event listener
  window.addEventListener('scroll', () => {
    const top = window.scrollY;

    sections.forEach(sec => {
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        setActiveLink(id);
      }
    });

    // Toggle 'sticky' class on the header
    const header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    // Reset menu icon and navbar when scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });

  // Initialize Swiper slider
  new Swiper(".mySwiper", {
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

  // Dark Mode Icon Toggle
});
let darkModeIcon = document.querySelector('#darkmode-icon');

  darkModeIcon.addEventListener('click', () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
  });