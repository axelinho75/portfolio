document.addEventListener('DOMContentLoaded', function() {
    // Initialiser GSAP et ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Effet de parallaxe pour le héros
    const heroSection = document.getElementById('contact-hero');
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
    
    // Animer les éléments au défilement
    const animatedElements = document.querySelectorAll('.animate-fade-up, .animate-slide-in, .animate-scale-in');
    animatedElements.forEach(element => {
      ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        onEnter: () => {
          const delay = parseInt(element.dataset.delay, 10) || 0;
          setTimeout(() => {
            element.classList.add('animated');
          }, delay);
        }
      });
    });
    
    // Gérer le formulaire de contact
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    const resetButton = document.getElementById('reset-form');
    const formWrapper = document.getElementById('contact-form-wrapper');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Valider les champs du formulaire
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
          alert('Veuillez remplir tous les champs du formulaire.');
          return;
        }
        
        // Validation de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
          alert('Veuillez entrer une adresse email valide.');
          return;
        }
        
        // Afficher l'état de chargement
        const submitButton = contactForm.querySelector('.submit-button');
        submitButton.classList.add('loading');
        submitButton.disabled = true;
        
        // Simuler l'envoi du formulaire (remplacer par un vrai appel API si nécessaire)
        setTimeout(() => {
          // Masquer le formulaire et afficher le message de succès
          gsap.to(contactForm, {
            opacity: 0,
            y: 20,
            duration: 0.4,
            onComplete: () => {
              contactForm.style.display = 'none';
              successMessage.classList.add('active');
              gsap.fromTo(successMessage, 
                { opacity: 0, y: 20 }, 
                { opacity: 1, y: 0, duration: 0.5 }
              );
            }
          });
        }, 1500);
      });
    }
    
    // Réinitialiser le formulaire
    if (resetButton) {
      resetButton.addEventListener('click', function() {
        gsap.to(successMessage, {
          opacity: 0,
          y: 20,
          duration: 0.4,
          onComplete: () => {
            successMessage.classList.remove('active');
            contactForm.style.display = 'block';
            contactForm.reset();
            
            const submitButton = contactForm.querySelector('.submit-button');
            submitButton.classList.remove('loading');
            submitButton.disabled = false;
            
            gsap.fromTo(contactForm, 
              { opacity: 0, y: 20 }, 
              { opacity: 1, y: 0, duration: 0.5 }
            );
          }
        });
      });
    }
    
    // Animation des méthodes de contact au survol
    const contactMethods = document.querySelectorAll('.contact-method');
    contactMethods.forEach(method => {
      method.addEventListener('mouseenter', () => {
        gsap.to(method, {
          y: -5,
          x: 5,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          duration: 0.3
        });
      });
      
      method.addEventListener('mouseleave', () => {
        gsap.to(method, {
          y: 0,
          x: 0,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          duration: 0.3
        });
      });
    });
    
    // Animation des liens sociaux au survol
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          y: -5,
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          duration: 0.3
        });
      });
      
      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          y: 0,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          duration: 0.3
        });
      });
    });
    
    // Animation du bouton d'envoi au survol
    const submitButton = document.querySelector('.submit-button');
    if (submitButton) {
      submitButton.addEventListener('mouseenter', () => {
        gsap.to(submitButton.querySelector('svg'), {
          x: 4,
          duration: 0.3
        });
      });
      
      submitButton.addEventListener('mouseleave', () => {
        gsap.to(submitButton.querySelector('svg'), {
          x: 0,
          duration: 0.3
        });
      });
    }
    
    // Adapter les styles lorsque le mode sombre change
    document.querySelector('.dark-mode-toggle')?.addEventListener('click', () => {
      // Attendre que la classe dark-mode soit appliquée/supprimée
      setTimeout(() => {
        const isDarkMode = document.body.classList.contains('dark-mode');
        
        // Mettre à jour les styles si nécessaire pour les éléments spécifiques au mode sombre
        if (isDarkMode) {
          // Appliquer les styles du mode sombre si nécessaire pour des éléments dynamiques
        } else {
          // Appliquer les styles du mode clair si nécessaire pour des éléments dynamiques
        }
      }, 100);
    });
  });