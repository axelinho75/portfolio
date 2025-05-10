document.addEventListener('DOMContentLoaded', function() {
    // Initialiser GSAP et ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Effet de parallaxe pour le héros
    const heroSection = document.getElementById('veille-hero');
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
    document.addEventListener('DOMContentLoaded', function() {
      // Initialiser GSAP et ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);
      
      // Effet de parallaxe pour le héros
      const heroSection = document.getElementById('veille-hero');
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
      
      // Animation de l'introduction
      const introCard = document.querySelector('.intro-card');
      ScrollTrigger.create({
        trigger: introCard,
        start: 'top 80%',
        onEnter: () => introCard.classList.add('animated')
      });
      
      // Animation de la méthodologie & outils
      const methodologyItems = document.querySelectorAll('.methodology-list li');
      methodologyItems.forEach((item, i) => {
        // on ajoute la classe d'état initial
        item.classList.add('animate-from-bottom');
        ScrollTrigger.create({
          trigger: item,
          start: 'top 85%',
          onEnter: () => {
            // un petit délai selon l'ordre dans la liste
            setTimeout(() => item.classList.add('animated'), i * 100);
          }
        });
      });
      
      // Animation des domaines d'étude
      const focusAreaCards = document.querySelectorAll('.focus-area-card');
      focusAreaCards.forEach((card) => {
        ScrollTrigger.create({
          trigger: card,
          start: 'top 80%',
          onEnter: () => {
            const delay = parseInt(card.dataset.delay, 10) || 0;
            setTimeout(() => card.classList.add('animated'), delay);
          }
        });
      });
      
      // Animation des articles
      const articleCards = document.querySelectorAll('.article-card');
      articleCards.forEach((card) => {
        ScrollTrigger.create({
          trigger: card,
          start: 'top 80%',
          onEnter: () => {
            const delay = parseInt(card.dataset.delay, 10) || 0;
            setTimeout(() => card.classList.add('animated'), delay);
          }
        });
      });
      
      // Animation de la timeline
      const timelineEvents = document.querySelectorAll('.timeline-event');
      timelineEvents.forEach((event) => {
        ScrollTrigger.create({
          trigger: event,
          start: 'top 85%',
          onEnter: () => {
            const delay = parseInt(event.dataset.delay, 10) || 0;
            setTimeout(() => event.classList.add('animated'), delay);
          }
        });
      });
      
      // Animation de la newsletter
      const newsletterCard = document.querySelector('.newsletter-card');
      ScrollTrigger.create({
        trigger: newsletterCard,
        start: 'top 80%',
        onEnter: () => newsletterCard.classList.add('animated')
      });
      
      // Animation des titres de section (y compris celle de Méthodologie)
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
      
      // Animations au survol des cartes de focus
      focusAreaCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -8, scale: 1.02, duration: 0.3 });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, scale: 1, duration: 0.3 });
        });
      });
      
      // Animations au survol des articles
      articleCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -5, duration: 0.3 });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, duration: 0.3 });
        });
      });
      
      // Animation des liens d'articles au survol
      const articleLinks = document.querySelectorAll('.article-link');
      articleLinks.forEach(link => {
        const arrow = link.querySelector('svg');
        link.addEventListener('mouseenter', () => {
          gsap.to(arrow, { x: 4, duration: 0.3 });
        });
        link.addEventListener('mouseleave', () => {
          gsap.to(arrow, { x: 0, duration: 0.3 });
        });
      });
      
      // Animation de la timeline au défilement
      const timelineLine = document.querySelector('.timeline-line');
      ScrollTrigger.create({
        trigger: timelineLine,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          timelineLine.style.background = `linear-gradient(to bottom, 
            var(--color-primary) 0%, 
            var(--color-secondary) ${progress * 100}%, 
            var(--color-gray-300) ${progress * 100}%, 
            var(--color-gray-300) 100%)`;
        }
      });
      
      // Bouton newsletter avec effet d'échelle
      const newsletterButton = document.querySelector('.newsletter-button');
      if (newsletterButton) {
        newsletterButton.addEventListener('mouseenter', () => {
          gsap.to(newsletterButton, { y: -4, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', duration: 0.3 });
        });
        newsletterButton.addEventListener('mouseleave', () => {
          gsap.to(newsletterButton, { y: 0, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', duration: 0.3 });
        });
        newsletterButton.addEventListener('click', function(e) {
          e.preventDefault();
          const emailInput = document.querySelector('.newsletter-input');
          const email = emailInput.value.trim();
          if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Merci de vous être abonné à la newsletter ! Vous recevrez bientôt des nouvelles.');
            emailInput.value = '';
          } else {
            alert('Veuillez entrer une adresse email valide.');
          }
        });
      }
  });

});
  