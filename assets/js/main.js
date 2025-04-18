document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('mobile-visible');
      });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      if (navLinks.classList.contains('mobile-visible') && 
          !event.target.closest('.nav-links') && 
          !event.target.closest('.mobile-menu-toggle')) {
        navLinks.classList.remove('mobile-visible');
      }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  });