document.addEventListener("DOMContentLoaded", function () {
    // Select audio element
    const audio = document.getElementById("audio");
    let isPlaying = false;

    function playMusic() {
        if (!isPlaying) {
            audio.play().then(() => {
                isPlaying = true;
            }).catch(error => {
                console.log("Playback failed:", error);
            });
        }
    }

    // Automatic Image Slider for each slider container
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach((slider) => {
        let slideIndex = 0;
        const slidesContainer = slider.querySelector(".slides");
        const slides = slider.querySelectorAll(".slide");
        const totalSlides = slides.length;
        let autoSlideInterval;
        let isSwiping = false;
        let isTransitioning = false;
        let startX = 0;
        let endX = 0;

        function updateSlidePosition() {
            slidesContainer.style.transition = "transform 0.5s ease-in-out";
            slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
            isTransitioning = true;
            setTimeout(() => isTransitioning = false, 500);
        }

        function nextSlide() {
            if (isTransitioning) return;
            slideIndex = (slideIndex + 1) % totalSlides;
            updateSlidePosition();
            playMusic();
        }

        function prevSlide() {
            if (isTransitioning) return;
            slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
            updateSlidePosition();
            playMusic();
        }

        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 5000);
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        startAutoSlide();

        // Pause slider on hover (only for desktop)
        slider.addEventListener("mouseenter", stopAutoSlide);
        slider.addEventListener("mouseleave", startAutoSlide);

        // Fix: Prevent multiple clicks causing double-slide
        slider.querySelector(".next").addEventListener("click", function () {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });

        slider.querySelector(".prev").addEventListener("click", function () {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        });

        // Fix: Swipe functionality for mobile
        slider.addEventListener("touchstart", (e) => {
            if (e.touches.length > 1) return; // Ignore multi-touch
            startX = e.touches[0].clientX;
            isSwiping = true;
        });

        slider.addEventListener("touchmove", (e) => {
            if (!isSwiping) return;
            endX = e.touches[0].clientX;
        });

        slider.addEventListener("touchend", () => {
            if (!isSwiping) return;
            isSwiping = false;

            let swipeDistance = startX - endX;

            if (swipeDistance > 50) {
                stopAutoSlide();
                nextSlide();
                startAutoSlide();
            } else if (swipeDistance < -50) {
                stopAutoSlide();
                prevSlide();
                startAutoSlide();
            }
        });

        // Start music when clicking slider anywhere
        slider.addEventListener("click", playMusic);
        slider.addEventListener("touchend", playMusic);
    });
});
