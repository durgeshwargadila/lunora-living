/* ========================================
   LUNORA SPACES - JAVASCRIPT
   Main Script File
   ======================================== */

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Close mobile menu when a link is clicked
if (navLinks) {
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// Login Tab Switching
const loginTabs = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

loginTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and contents
    loginTabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to clicked tab
    tab.classList.add('active');

    // Add active class to corresponding content
    const tabName = tab.getAttribute('data-tab');
    const activeContent = document.getElementById(tabName);
    if (activeContent) {
      activeContent.classList.add('active');
    }
  });
});

// Form Validation
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll('input, textarea');

  inputs.forEach(input => {
    const errorElement = input.parentElement.querySelector('.form-error');
    let error = '';

    if (input.value.trim() === '') {
      error = 'This field is required';
      isValid = false;
    } else if (input.type === 'email' && !validateEmail(input.value)) {
      error = 'Please enter a valid email';
      isValid = false;
    } else if (input.type === 'password' && input.value.length < 6) {
      error = 'Password must be at least 6 characters';
      isValid = false;
    } else if (input.type === 'tel' && input.value.trim().length < 10) {
      error = 'Please enter a valid phone number';
      isValid = false;
    }

    if (error) {
      if (errorElement) {
        errorElement.textContent = error;
        errorElement.classList.add('active');
      }
      input.style.borderColor = '#d32f2f';
    } else {
      if (errorElement) {
        errorElement.classList.remove('active');
      }
      input.style.borderColor = '';
    }
  });

  return isValid;
}

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm(contactForm)) {
      const successMessage = contactForm.querySelector('.form-success');
      if (successMessage) {
        successMessage.classList.add('active');
        successMessage.textContent = 'Thank you! Your message has been sent successfully.';
      }

      // Reset form
      setTimeout(() => {
        contactForm.reset();
        if (successMessage) {
          successMessage.classList.remove('active');
        }
      }, 3000);
    }
  });
}

// Login Form Submission
const userLoginForm = document.getElementById('user-login-form');
const adminLoginForm = document.getElementById('admin-login-form');

if (userLoginForm) {
  userLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm(userLoginForm)) {
      alert('Welcome! You have been logged in as a User.');
      userLoginForm.reset();
      // In a real project, this would send data to a backend
    }
  });
}

if (adminLoginForm) {
  adminLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm(adminLoginForm)) {
      alert('Welcome! You have been logged in as an Admin.');
      adminLoginForm.reset();
      // In a real project, this would send data to a backend
    }
  });
}

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.scroll-reveal');

const revealOnScroll = () => {
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('reveal');
    }
  });
};

// Run on page load
window.addEventListener('load', revealOnScroll);

// Run on scroll
window.addEventListener('scroll', revealOnScroll);

// Add scroll reveal class to elements on page load
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.design-card, .designer-card, .testimonial');
  cards.forEach(card => {
    card.classList.add('scroll-reveal');
  });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Logo Click - Return to Home
const logo = document.querySelector('.logo');
if (logo) {
  logo.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}

// Gallery Modal (Optional - for future enhancement)
function openGalleryModal(imageSrc) {
  // This function can be expanded later for a modal gallery view
  console.log('Opening image:', imageSrc);
}

// Real-time form validation as user types
const allInputs = document.querySelectorAll('input, textarea');
allInputs.forEach(input => {
  input.addEventListener('blur', () => {
    const errorElement = input.parentElement.querySelector('.form-error');
    let error = '';

    if (input.value.trim() === '') {
      error = 'This field is required';
    } else if (input.type === 'email' && !validateEmail(input.value)) {
      error = 'Please enter a valid email';
    } else if (input.type === 'password' && input.value.length < 6) {
      error = 'Password must be at least 6 characters';
    } else if (input.type === 'tel' && input.value.trim().length < 10) {
      error = 'Please enter a valid phone number';
    }

    if (error) {
      if (errorElement) {
        errorElement.textContent = error;
        errorElement.classList.add('active');
      }
      input.style.borderColor = '#d32f2f';
    } else {
      if (errorElement) {
        errorElement.classList.remove('active');
      }
      input.style.borderColor = '';
    }
  });

  input.addEventListener('focus', () => {
    const errorElement = input.parentElement.querySelector('.form-error');
    if (errorElement) {
      errorElement.classList.remove('active');
    }
    input.style.borderColor = '';
  });
});

// Active nav link indicator
const navLinkItems = document.querySelectorAll('.nav-links a');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

navLinkItems.forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active-link');
  }
});

// Mobile Menu Toggle Animation
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuToggle.querySelectorAll('span').forEach((span, index) => {
      if (navLinks.classList.contains('active')) {
        if (index === 0) {
          span.style.transform = 'rotate(45deg) translate(10px, 10px)';
        } else if (index === 1) {
          span.style.opacity = '0';
        } else {
          span.style.transform = 'rotate(-45deg) translate(7px, -7px)';
        }
      } else {
        span.style.transform = '';
        span.style.opacity = '1';
      }
    });
  });
}

// Window scroll effect on navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
  }
});

console.log('Lunora Spaces - Modern Interior Design Website');
