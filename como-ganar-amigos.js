// Ejemplo de cambio de color del menú activo
const menuLinks = document.querySelectorAll("nav a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        // Eliminar la clase 'active' de todos los enlaces
        menuLinks.forEach(link => link.classList.remove("active"));

        // Agregar la clase 'active' solo al enlace clicado
        link.classList.add("active");
    });
});

// Ejemplo de cambio de color del título del libro al pasar el mouse
const bookTitle = document.querySelectorAll(".book-post h2 a");

bookTitle.forEach(title => {
    title.addEventListener("mouseover", () => {
        title.style.color = "#FFA500";
    });

    title.addEventListener("mouseout", () => {
        title.style.color = "red";
    });
});
const audios = document.querySelectorAll('audio');

audios.forEach((audio, index) => {
    audio.addEventListener('ended', () => {
        const nextAudio = audios[index + 1];
        if (nextAudio) {
            nextAudio.play();
        }
    });
});
