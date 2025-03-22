const musicBtn = document.getElementById("music-btn");
const audio = document.getElementById("audio");

let isPlaying = false; // Start in paused state

// Function to start audio on user interaction (scroll or touch)
const startAudio = () => {
    audio.play().then(() => {
        console.log("Audio started on user interaction.");
        musicBtn.textContent = "Pause Music";
        isPlaying = true;
    }).catch(error => {
        console.log("Playback failed:", error);
    });

    // Remove event listeners after first interaction
    window.removeEventListener("scroll", startAudio);
    window.removeEventListener("touchstart", startAudio);
};

// Listen for the first user scroll or touch event to start audio
window.addEventListener("scroll", startAudio, { once: true });
window.addEventListener("touchstart", startAudio, { once: true });

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
