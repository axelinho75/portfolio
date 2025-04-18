document.addEventListener('DOMContentLoaded', function() {
  // Initialiser GSAP et ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  
  // Effet parallaxe pour le héros
  const heroSection = document.getElementById('projects-hero');
  if (heroSection) {
    gsap.to('.hero-container', {
      scrollTrigger: {
        trigger: heroSection,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      },
      opacity: 0,
      y: -50,
      scale: 0.8
    });
  }
  
  // Filtrage des projets
  const filterButtons = document.querySelectorAll('.filter-button');
  const projectCategories = document.querySelectorAll('.project-category');
  
  // Fonction pour afficher les projets selon le filtre
  function filterProjects(filter) {
    // Masquer toutes les catégories de projets d'abord
    projectCategories.forEach(category => {
      if (filter === 'all' || category.dataset.category === filter) {
        category.style.display = 'block';
      } else {
        category.style.display = 'none';
      }
    });
    
    // Mettre à jour l'état actif des boutons de filtre
    filterButtons.forEach(btn => {
      if (btn.dataset.filter === filter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    // Déclencher le redimensionnement pour que GSAP recalcule les positions
    window.dispatchEvent(new Event('resize'));
  }
  
  // Ajouter des écouteurs d'événements aux boutons de filtre
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterProjects(filter);
    });
  });
  
  // Animation des cartes de projet
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    // Ajouter une classe pour les animations CSS
    ScrollTrigger.create({
      trigger: card,
      start: 'top 85%',
      onEnter: () => {
        const delay = parseInt(card.dataset.delay) || 0;
        setTimeout(() => {
          card.classList.add('animated');
        }, delay);
      }
    });
    
    // Animation au survol avec GSAP
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        duration: 0.3
      });
      
      const projectImage = card.querySelector('.project-image img');
      gsap.to(projectImage, {
        scale: 1.1,
        duration: 0.5
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        duration: 0.3
      });
      
      const projectImage = card.querySelector('.project-image img');
      gsap.to(projectImage, {
        scale: 1,
        duration: 0.5
      });
    });
  });
  
  // Animation des titres des sections
  const sectionTitles = document.querySelectorAll('.section-title, .category-header');
  sectionTitles.forEach(title => {
    ScrollTrigger.create({
      trigger: title,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(title, 
          { opacity: 0, y: 30 }, 
          { opacity: 1, y: 0, duration: 0.8 }
        );
      }
    });
  });
  
  // Animation des liens GitHub
  const githubLinks = document.querySelectorAll('.github-link');
  githubLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      const arrow = link.querySelector('.arrow-icon');
      gsap.to(arrow, {
        x: 5,
        duration: 0.3
      });
    });
    
    link.addEventListener('mouseleave', () => {
      const arrow = link.querySelector('.arrow-icon');
      gsap.to(arrow, {
        x: 0,
        duration: 0.3
      });
    });
  });
  
  // Animation des boutons CTA
  const ctaButtons = document.querySelectorAll('.btn');
  ctaButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        y: -5,
        duration: 0.3
      });
    });
    
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        y: 0,
        duration: 0.3
      });
    });
  });
});