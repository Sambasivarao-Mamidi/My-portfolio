// Animate on scroll (basic example)
const fadeEls = document.querySelectorAll('.fade-in, .slide-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});

// Dark/Light Mode Toggle
const toggleButton = document.getElementById('mode-toggle');
const toggleIcon = toggleButton.querySelector('.toggle-icon');
const currentTheme = localStorage.getItem('theme');

// Set theme on initial load
const setInitialTheme = () => {
    if (currentTheme === 'dark-mode') {
        document.body.classList.add('dark-mode');
        toggleIcon.textContent = '🌙';
    } else {
        document.body.classList.add('light-mode');
        toggleIcon.textContent = '☀️';
        localStorage.setItem('theme', 'light-mode'); // Ensure a default is set
    }
};

setInitialTheme();

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
  if (document.body.classList.contains('light-mode')) {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
    toggleIcon.textContent = '🌙';
  } else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    localStorage.setItem('theme', 'light-mode');
    toggleIcon.textContent = '☀️';
  }
});