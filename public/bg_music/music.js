const musicBtn = document.getElementById("music-btn");
const volumeSlider = document.getElementById("volume-slider");
const audio = document.getElementById("audio");
const toggleVolume = document.getElementById("toggle-volume");
const volumeContainer = document.getElementById("volume-container");

let isPlaying = false;
musicBtn.textContent = "Play Music";

// Play music automatically
window.addEventListener("DOMContentLoaded", () => {
    audio.play().catch(error => console.log("Autoplay blocked:", error));
    musicBtn.textContent = "Pause Music";
});

// Toggle Play/Pause
musicBtn.addEventListener("click", () => {
    if (isPlaying) {
        audio.play();
        musicBtn.textContent = "Pause Music";
    } else {
        

        audio.pause();
        musicBtn.textContent = "Play Music";
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
