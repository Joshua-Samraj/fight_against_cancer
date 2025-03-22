const musicBtn = document.getElementById("music-btn");
const audio = document.getElementById("audio");

let isPlaying = false; // Start in paused state

// Function to start audio on first scroll or touch
const startAudioOnScrollOrTouch = () => {
    audio.play().then(() => {
        console.log("Audio started on scroll/touch.");
        musicBtn.textContent = "Pause Music";
        isPlaying = true;
    }).catch(error => {
        console.log("Playback failed:", error);
    });

    // Remove event listeners after first interaction
    window.removeEventListener("scroll", startAudioOnScrollOrTouch);
    window.removeEventListener("touchstart", startAudioOnScrollOrTouch);
};

// Listen for the first user scroll or touch event to start audio
window.addEventListener("scroll", startAudioOnScrollOrTouch, { once: true });
window.addEventListener("touchstart", startAudioOnScrollOrTouch, { once: true });

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
