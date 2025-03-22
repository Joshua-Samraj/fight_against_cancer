const musicBtn = document.getElementById("music-btn");
const audio = document.getElementById("audio");
const allButtons = document.querySelectorAll("button"); // Select all buttons

let isPlaying = false; // Start in paused state

// Function to start audio on user interaction
const startAudio = () => {
    audio.play().then(() => {
        console.log("Audio started on user interaction.");
        musicBtn.textContent = "Pause Music";
        isPlaying = true;
    }).catch(error => {
        console.log("Playback failed:", error);
    });

    // Remove event listeners after first activation
    window.removeEventListener("scroll", startAudio);
    window.removeEventListener("touchstart", startAudio);
    allButtons.forEach(btn => btn.removeEventListener("click", startAudio));
};

// Listen for first user scroll, touch, or button click to start audio
window.addEventListener("scroll", startAudio, { once: true });
window.addEventListener("touchstart", startAudio, { once: true });
allButtons.forEach(btn => btn.addEventListener("click", startAudio, { once: true }));

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
