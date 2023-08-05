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
const audioPlayers = document.querySelectorAll('.audio-player');

audioPlayers.forEach((audio) => {
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
});

function handlePlay(event) {
    const currentAudio = event.target;
    audioPlayers.forEach((audio) => {
        if (audio !== currentAudio) {
            audio.pause();
        }
    });
}

function handlePause(event) {
    const currentAudio = event.target;
    const isPaused = currentAudio.paused;
    if (!isPaused) {
        currentAudio.pause();
    }
}
