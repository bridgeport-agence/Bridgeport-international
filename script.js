document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.navbar a[href]');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    const pageName = href.split('/').pop();
    if (pageName === currentPage) {
      link.classList.add('active');
    }
  });

  const revealItems = document.querySelectorAll('.hero, section, .card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
  });

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 80}ms`;
    observer.observe(item);
  });

  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(36, 80, 211, 0.12), rgba(255,255,255,1) 42%)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.background = '';
    });
  });
});
