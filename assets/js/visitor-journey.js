document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('visitor-journey-modal');
    const modalOverlay = modal.querySelector('.modal-overlay');
    const exploreButton = document.getElementById('explore-freely');
    const personaButtons = document.querySelectorAll('.persona-button');
    
    // Vérifier si le visiteur a déjà choisi un type
    const visitorType = localStorage.getItem('visitorType');
    
    // Si pas encore de choix, afficher le modal après un délai
    if (!visitorType) {
      setTimeout(() => {
        showModal();
      }, 2000);
    }
    
    // Fonction pour afficher le modal
    function showModal() {
      modal.classList.add('visible');
    }
    
    // Fonction pour cacher le modal
    function hideModal() {
      modal.classList.remove('visible');
    }
    
    // Fermer le modal en cliquant sur l'overlay
    modalOverlay.addEventListener('click', hideModal);
    
    // Fermer le modal avec le bouton "Explorer librement"
    exploreButton.addEventListener('click', hideModal);
    
    // Gérer les clics sur les boutons de persona
    personaButtons.forEach(button => {
      button.addEventListener('click', () => {
        const type = button.getAttribute('data-type');
        
        // Sauvegarder le choix
        localStorage.setItem('visitorType', type);
        
        // Animation de fermeture
        hideModal();
        
        // Redirection après délai
        setTimeout(() => {
          switch(type) {
            case 'recruiter':
              window.location.href = 'parcours.html';
              break;
            case 'client':
              window.location.href = 'projects.html';
              break;
            case 'student':
              window.location.href = 'competences.html';
              break;
            default:
              // Rester sur la page
          }
        }, 1000);
      });
    });
  });