const elementsToAnimate = document.querySelectorAll(".fade-in");

// Créer un observer pour surveiller les éléments qui deviennent visibles
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      // Si l'élément entre dans la zone visible
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Ajoute la classe "visible"
        observer.unobserve(entry.target); // Arrêter d'observer l'élément une fois qu'il est visible
      }
    });
  },
  {
    threshold: 0.5, // Déclenche l'observation lorsque 50% de l'élément est visible
  }
);

// Observer chaque élément de la classe "fade-in"
elementsToAnimate.forEach((element) => {
  observer.observe(element);
});
