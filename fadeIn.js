// Sélectionner tous les éléments à animer
const elementsToAnimate = document.querySelectorAll(".fade-in");

// Créer une instance de l'Intersection Observer
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Quand l'élément devient visible (plus de 50%)
        entry.target.classList.add("visible");
        entry.target.classList.remove("not-visible"); // Retirer la classe not-visible quand visible
      } else {
        // Quand l'élément devient moins visible (moins de 50%)
        entry.target.classList.remove("visible"); // Retirer la classe visible
        entry.target.classList.add("not-visible"); // Ajouter la classe not-visible pour shrink et blur
      }
    });
  },
  { threshold: 0.5 }
); // Observer les éléments à partir de 50% visibles

// Observer chaque élément à animer
elementsToAnimate.forEach((element) => {
  observer.observe(element);
  element.addEventListener("animationend", () => {
    // Vérifier si l'élément a fini l'animation shrink and blur
    if (element.classList.contains("not-visible")) {
      // Réinitialiser l'élément après l'animation shrink and blur
      element.classList.remove("not-visible"); // Retirer la classe not-visible
      element.classList.remove("fade-in");

      element.classList.add('fade-in');
    }
  });
});
