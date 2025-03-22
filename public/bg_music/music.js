const musicBtn = document.getElementById("music-btn");
const volumeSlider = document.getElementById("volume-slider");
const audio = document.getElementById("audio");
const toggleVolume = document.getElementById("toggle-volume");
const volumeContainer = document.getElementById("volume-container");

let isPlaying = false;

// Attempt to autoplay (start muted to bypass restrictions)
window.addEventListener("DOMContentLoaded", () => {
    audio.muted = true;  // Start muted to allow autoplay
    audio.play().then(() => {
        audio.muted = false; // Unmute after play starts
        musicBtn.textContent = "Pause Music";
        isPlaying = true;
    }).catch(error => console.log("Autoplay blocked:", error));
});

// Toggle Play/Pause
musicBtn.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        musicBtn.textContent = "Play Music";
    } else {
        audio.play();
        audio.muted = false; // Unmute when user interacts
        musicBtn.textContent = "Pause Music";
    }
    isPlaying = !isPlaying;
});

// Show/hide volume slider
toggleVolume.addEventListener("click", () => {
    volumeContainer.style.display = (volumeContainer.style.display === "none") ? "block" : "none";
});

// Adjust volume
volumeSlider.addEventListener("input", (event) => {
    audio.volume = event.target.value;
});
