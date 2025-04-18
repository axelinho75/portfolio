document.addEventListener('DOMContentLoaded', function() {
    // Init GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Apply automatic delays to elements
    const applyDelays = () => {
      document.querySelectorAll('[data-delay]').forEach(el => {
        el.style.animationDelay = `${parseInt(el.dataset.delay)}ms`;
      });
    };
    
    applyDelays();
    
    // Parallax effect for hero section
    const heroSection = document.getElementById('hero');
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
        y: -100,
        opacity: 0,
        scale: 0.8,
        ease: 'power1.out'
      });
    }
    
    // Animate section titles when scrolled into view
    gsap.utils.toArray('.section-title').forEach(title => {
      gsap.fromTo(title, 
        { opacity: 0, y: 30 }, 
        {
          opacity: 1, 
          y: 0,
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          duration: 0.8
        }
      );
    });
    
    // Animate service cards when scrolled into view
    gsap.utils.toArray('.service-card').forEach((card, index) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 30 }, 
        {
          opacity: 1, 
          y: 0,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          duration: 0.7,
          delay: index * 0.2
        }
      );
    });
    
    // Animate skill items when scrolled into view
    gsap.utils.toArray('.skill-item').forEach((item, index) => {
      gsap.fromTo(item, 
        { opacity: 0, scale: 0.8 }, 
        {
          opacity: 1, 
          scale: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          duration: 0.6,
          delay: index * 0.1
        }
      );
    });
    
    // Handle hover animations for buttons
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', duration: 0.3 });
      });
      
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { y: 0, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', duration: 0.3 });
      });
    });
    
    // Handle hover animations for service cards
    document.querySelectorAll('.service-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -8, duration: 0.3 });
        gsap.to(card.querySelector('.service-highlight'), { width: '100%', duration: 0.3 });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, duration: 0.3 });
        gsap.to(card.querySelector('.service-highlight'), { width: 0, duration: 0.3 });
      });
    });
  });