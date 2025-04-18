document.addEventListener('DOMContentLoaded', function() {
    // Initialiser GSAP et ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Effet de parallaxe pour le héros
    const heroSection = document.getElementById('parcours-hero');
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
    
    // Gestion des onglets
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const tabsHighlight = document.querySelector('.tabs-highlight');
    
    // Mettre à jour la position du surlignage
    function updateHighlight(activeButton) {
      if (!tabsHighlight || !activeButton) return;
      
      const buttonRect = activeButton.getBoundingClientRect();
      const containerRect = activeButton.closest('.tabs-wrapper').getBoundingClientRect();
      
      tabsHighlight.style.width = `${buttonRect.width}px`;
      tabsHighlight.style.left = `${buttonRect.left - containerRect.left + buttonRect.width / 2}px`;
    }
    
    // Gérer le changement d'onglet
    function setActiveTab(tab) {
      // Désactiver tous les onglets
      tabButtons.forEach(button => button.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Activer l'onglet sélectionné
      const activeButton = document.querySelector(`.tab-button[data-tab="${tab}"]`);
      const activeContent = document.getElementById(`content-${tab}`);
      
      if (activeButton) activeButton.classList.add('active');
      if (activeContent) activeContent.classList.add('active');
      
      // Mettre à jour la position du surlignage
      updateHighlight(activeButton);
    }
    
    // Ajouter des écouteurs d'événements aux boutons d'onglet
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tab = button.dataset.tab;
        setActiveTab(tab);
      });
    });
    
    // Initialiser le surlignage
    const activeButton = document.querySelector('.tab-button.active');
    if (activeButton) {
      updateHighlight(activeButton);
    }
    
    // Mettre à jour lors du redimensionnement
    window.addEventListener('resize', () => {
      const activeButton = document.querySelector('.tab-button.active');
      updateHighlight(activeButton);
    });
    
    // Fonction pour animer les éléments du contenu actif
    function animateTabContent(tabId) {
      if (tabId === 'education') {
        // Animer les éléments de la timeline
        const educationItems = document.querySelectorAll('.education-item');
        educationItems.forEach(item => {
          const delay = parseInt(item.dataset.delay) || 0;
          setTimeout(() => {
            item.classList.add('animated');
          }, delay);
        });
      } else if (tabId === 'projects') {
        // Animer les cartes de projets
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
          const delay = parseInt(card.dataset.delay) || 0;
          setTimeout(() => {
            card.classList.add('animated');
          }, delay);
        });
      }
    }
    
    // Animation initiale du contenu actif
    const initialTabId = document.querySelector('.tab-button.active').getAttribute('data-tab');
    animateTabContent(initialTabId);
    
    // Animation des cartes au défilement
    const educationItems = document.querySelectorAll('.education-item');
    educationItems.forEach(item => {
      ScrollTrigger.create({
        trigger: item,
        start: 'top 80%',
        onEnter: () => {
          const delay = parseInt(item.dataset.delay) || 0;
          setTimeout(() => {
            item.classList.add('animated');
          }, delay);
        }
      });
    });
    
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
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
    
    // Animation des boutons
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', duration: 0.3 });
      });
      
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { y: 0, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', duration: 0.3 });
      });
    });
    
    // Animation des cartes au survol
    document.querySelectorAll('.education-card, .project-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', duration: 0.3 });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', duration: 0.3 });
      });
    });
  });