const musicBtn = document.getElementById("music-btn");
const audio = document.getElementById("audio");

let isPlaying = true; // Default to playing

// Autoplay on page load
window.addEventListener("DOMContentLoaded", () => {
    audio.muted = false; // Ensure it's unmuted
    audio.play().then(() => {
        console.log("Audio autoplay started.");
        musicBtn.textContent = "Pause Music";
    }).catch(error => {
        console.log("Autoplay blocked, waiting for user interaction:", error);
    });
});

// Click anywhere to start audio if autoplay is blocked
document.body.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        musicBtn.textContent = "Pause Music";
    }
}, { once: true }); // Runs only once

// Toggle Play/Pause Button
musicBtn.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        musicBtn.textContent = "Play Music";
    } else {
        audio.play();
        musicBtn.textContent = "Pause Music";
    }
    isPlaying = !isPlaying;
});
