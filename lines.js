document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.lines-container');
    
    const lineCount = 7; // Nombre de lignes
    const lineWidth = 100 / lineCount; // Largeur de chaque ligne en pourcentage
  
    // Création des lignes
    for (let i = 0; i < lineCount; i++) {
      const line = document.createElement('div');
      line.classList.add('line');
      container.appendChild(line);
  
      // Positionner chaque ligne de manière égale avec flexbox
      line.style.left = `${lineWidth * i}%`; // Position de chaque ligne
    }
  
    // Création des zones interactives qui vont déclencher l'effet
    for (let i = 0; i < lineCount; i++) {
      const area = document.createElement('div');
      area.classList.add('interactive-area');
      container.appendChild(area);
  
      // Position des zones interactives sous les lignes
      area.style.left = `${lineWidth * i}%`; // Utilisation du pourcentage pour aligner avec les lignes
      area.style.width = `${lineWidth}%`; // Largeur égale à celle des lignes
  
      // Ajouter les événements de survol
      area.addEventListener('mouseenter', () => {
        const lines = document.querySelectorAll('.line');
        lines[i].style.transform = 'scale(2)'; // Agrandir la ligne
        lines[i].style.backgroundColor = '#00F9FF'; // Changer la couleur
      });
  
      area.addEventListener('mouseleave', () => {
        const lines = document.querySelectorAll('.line');
        lines[i].style.transform = 'scale(1)'; // Retour à la taille normale
        lines[i].style.backgroundColor = 'rgba(136, 136, 136, 0.8)'; // Couleur d'origine
      });
    }
  });
  