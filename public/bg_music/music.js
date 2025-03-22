const musicBtn = document.getElementById("music-btn");
const audio = document.getElementById("audio");

let isPlaying = false; // Start in paused state

// Function to start audio on first scroll
const startAudioOnScroll = () => {
    audio.play().then(() => {
        console.log("Audio started on scroll.");
        musicBtn.textContent = "Pause Music";
        isPlaying = true;
    }).catch(error => {
        console.log("Playback failed:", error);
    });

    // Remove event listener after first scroll
    window.removeEventListener("scroll", startAudioOnScroll);
};

// Listen for the first user scroll event to start audio
window.addEventListener("scroll", startAudioOnScroll, { once: false });

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
