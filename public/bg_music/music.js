const musicBtn = document.getElementById("music-btn");
const audio = document.getElementById("audio");

let isPlaying = false;

// Autoplay on page load (Muted to bypass restrictions)
window.addEventListener("DOMContentLoaded", () => {
    audio.muted = true; // Start muted to allow autoplay
    audio.play().then(() => {
        console.log("Audio autoplay started.");
        audio.muted = false; // Unmute after successful play
        musicBtn.textContent = "Pause Music";
        isPlaying = true;
    }).catch(error => {
        console.log("Autoplay blocked, waiting for user interaction:", error);
    });
});

// Click anywhere to unmute and play audio if autoplay was blocked
document.body.addEventListener("click", () => {
    if (!isPlaying) {
        audio.play();
        audio.muted = false;
        musicBtn.textContent = "Pause Music";
        isPlaying = true;
    }
}, { once: true }); // Runs only once

// Toggle Play/Pause Button
musicBtn.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        musicBtn.textContent = "Play Music";
    } else {
        audio.play();
        audio.muted = false; // Ensure it's unmuted when played manually
        musicBtn.textContent = "Pause Music";
    }
    isPlaying = !isPlaying;
});
