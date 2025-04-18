document.addEventListener('DOMContentLoaded', function() {
  // Initialiser GSAP et ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  
  // Animer les cartes de compétences au défilement
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(card => {
    ScrollTrigger.create({
      trigger: card,
      start: 'top 80%',
      onEnter: () => {
        card.classList.add('animated');
      }
    });
  });
  
  // Animer les cartes de soft skills au défilement
  const softSkillCards = document.querySelectorAll('.soft-skill-card');
  softSkillCards.forEach(card => {
    ScrollTrigger.create({
      trigger: card,
      start: 'top 80%',
      onEnter: () => {
        const delay = parseInt(card.dataset.delay) || 0;
        setTimeout(() => {
          card.classList.add('animated');
        }, delay);
      }
    });
  });
  
  // Animer les catégories de compétences supplémentaires
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach(item => {
    ScrollTrigger.create({
      trigger: item,
      start: 'top 85%',
      onEnter: () => {
        const delay = parseInt(item.dataset.delay) || 0;
        setTimeout(() => {
          item.classList.add('animated');
        }, delay);
      }
    });
  });
  
  // Effet parallaxe pour le héros
  const heroSection = document.getElementById('competences-hero');
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
  
  // Animation des titres de section
  const sectionTitles = document.querySelectorAll('.section-title');
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
  
  // Animation des boutons
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', duration: 0.3 });
    });
    
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { y: 0, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', duration: 0.3 });
    });
  });
});