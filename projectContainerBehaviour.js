document.querySelectorAll('.project-container, .project-contact-more').forEach(container => {
    container.addEventListener('mouseenter', () => {
        // Augmente la largeur du container survolé
        container.style.width = '350px';
        
        // Déplace légèrement les containers voisins
        const siblings = [...container.parentNode.children].filter(child => child !== container);
        siblings.forEach(sibling => {
            const rect = container.getBoundingClientRect();
            const siblingRect = sibling.getBoundingClientRect();
            
            if (siblingRect.left > rect.left) { // Si le sibling est à droite
                sibling.style.transform = `translateX(${rect.width * 0.15}px)`;
            }
        });
    });

    container.addEventListener('mouseleave', () => {
        // Réinitialise les transformations
        container.style.width = '200px';
        document.querySelectorAll('.project-container, .project-contact-more').forEach(el => {
            el.style.transform = 'none';
        });
    });
});
