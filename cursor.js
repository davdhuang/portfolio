document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.querySelector('.cursor');
    
    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;
    const speed = 0.1; // Détermine la vitesse du délai (valeur entre 0 et 1, plus bas = plus lent)

    // Fonction de mise à jour de la position du cercle
    function updateCursorPosition() {
        // Calcule l'écart entre la position actuelle et la position de la souris
        posX += (mouseX - posX) * speed;
        posY += (mouseY - posY) * speed;

        // Mettre à jour la position du cercle
        cursor.style.transform = `translate(${posX - cursor.offsetWidth / 2}px, ${posY - cursor.offsetHeight / 2}px)`;

        // Rappeler la fonction dans le prochain "frame" pour un effet fluide
        requestAnimationFrame(updateCursorPosition);
    }

    // Écouter les mouvements du curseur
    document.addEventListener('mousemove', (e) => {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    // Lancer la fonction de mise à jour
    updateCursorPosition();
});