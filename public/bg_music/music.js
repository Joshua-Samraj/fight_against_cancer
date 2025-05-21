const musicBtn = document.getElementById("music-btn");
const audio = document.getElementById("audio");

let isPlaying = false; // Start in paused state

// Toggle Play/Pause Button
musicBtn.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        musicBtn.textContent = "Play Music";
    } else {
        audio.play().catch(error => {
            console.log("Playback blocked. User interaction required:", error);
        });
        musicBtn.textContent = "Pause Music";
    }
    isPlaying = !isPlaying;
});
