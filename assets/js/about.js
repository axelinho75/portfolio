document.addEventListener('DOMContentLoaded', function() {
    // Initialiser GSAP et ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Animation de parallaxe pour la section héros
    const heroSection = document.getElementById('about-hero');
    if (heroSection) {
      const heroContent = heroSection.querySelector('.container');
      
      gsap.fromTo(heroContent, {
        y: 0,
        opacity: 1,
        scale: 1
      }, {
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        },
        y: -50,
        opacity: 0,
        scale: 0.8,
        ease: 'power1.out'
      });
    }
    
    // Animation des éléments de la timeline
    const timelineEvents = document.querySelectorAll('.timeline-event');
    timelineEvents.forEach((event, index) => {
      const delay = parseInt(event.dataset.delay) || (index * 100);
      
      ScrollTrigger.create({
        trigger: event,
        start: 'top 80%',
        onEnter: () => {
          setTimeout(() => {
            event.classList.add('animated');
          }, delay);
        }
      });
    });
    
    // Animation des sections "Qui suis-je?" et des cartes
    const aboutText = document.querySelector('.about-text');
    const aboutCards = document.querySelector('.about-cards');
    const cards = document.querySelectorAll('.about-card');
    
    if (aboutText) {
      ScrollTrigger.create({
        trigger: aboutText,
        start: 'top 75%',
        onEnter: () => {
          aboutText.classList.add('animated');
        }
      });
    }
    
    if (aboutCards) {
      ScrollTrigger.create({
        trigger: aboutCards,
        start: 'top 75%',
        onEnter: () => {
          aboutCards.classList.add('animated');
          
          // Animer chaque carte avec délai
          cards.forEach(card => {
            const delay = parseInt(card.dataset.delay) || 0;
            setTimeout(() => {
              card.classList.add('animated');
            }, delay);
          });
        }
      });
    }
    
    // Animation des cartes de centres d'intérêt
    const interestCards = document.querySelectorAll('.interest-card');
    
    interestCards.forEach(card => {
      const items = card.querySelectorAll('.interest-item');
      const delay = parseInt(card.dataset.delay) || 0;
      
      ScrollTrigger.create({
        trigger: card,
        start: 'top 80%',
        onEnter: () => {
          setTimeout(() => {
            card.classList.add('animated');
            
            // Animer chaque élément de la liste
            items.forEach(item => {
              const itemDelay = parseInt(item.dataset.delay) || 0;
              setTimeout(() => {
                item.classList.add('animated');
              }, itemDelay);
            });
          }, delay);
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
    
    // Animation du titre "Centres d'intérêt"
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
  });