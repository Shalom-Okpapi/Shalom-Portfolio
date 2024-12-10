// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Your message has been sent successfully!');
});

// Portfolio Filtering Logic (Placeholder Example)
const portfolioItems = document.querySelectorAll('.portfolio-item');
const filterOptions = document.querySelectorAll('.filter-option');

filterOptions.forEach(option => {
  option.addEventListener('click', () => {
    const filter = option.getAttribute('data-filter');
    portfolioItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
