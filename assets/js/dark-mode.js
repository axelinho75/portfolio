document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Vérifier le thème sauvegardé ou utiliser la préférence système
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // Appliquer le thème initial
    if (initialTheme === 'dark') {
      document.body.classList.add('dark-mode');
      updateDarkModeIcon(true);
    }
    
    // Basculer le thème
    darkModeToggle.addEventListener('click', () => {
      const isDarkMode = document.body.classList.contains('dark-mode');
      
      if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        updateDarkModeIcon(false);
      } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        updateDarkModeIcon(true);
      }
    });
    
    // Mettre à jour l'icône du bouton
    function updateDarkModeIcon(isDarkMode) {
      const iconPath = darkModeToggle.querySelector('svg path');
      if (isDarkMode) {
        // Icône de soleil pour le mode sombre
        iconPath.setAttribute('d', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z');
      } else {
        // Icône de lune pour le mode clair
        iconPath.setAttribute('d', 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z');
      }
    }
  });