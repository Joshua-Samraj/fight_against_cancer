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
        let startX = 0;
        let endX = 0;

        function updateSlidePosition() {
            slidesContainer.style.transition = "transform 0.5s ease-in-out";
            slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
        }

        function nextSlide() {
            slideIndex = (slideIndex + 1) % totalSlides;
            updateSlidePosition();
            playMusic();
        }

        function prevSlide() {
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

        slider.addEventListener("mouseenter", stopAutoSlide);
        slider.addEventListener("mouseleave", startAutoSlide);

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

        slider.addEventListener("touchstart", (e) => {
            if (e.touches.length > 1) return;
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
                playMusic();
                startAutoSlide();
            } else if (swipeDistance < -50) {
                stopAutoSlide();
                prevSlide();
                playMusic();
                startAutoSlide();
            }
        });

        slider.addEventListener("click", playMusic);
        slider.addEventListener("touchend", playMusic);
    });

    // Modal Handling
    function setupModal(openBtnId, modalId, closeBtnId) {
        const openBtn = document.getElementById(openBtnId);
        const modal = document.getElementById(modalId);
        const closeBtn = document.getElementById(closeBtnId);

        openBtn.addEventListener("click", function () {
            modal.style.display = "block";
        });

        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });

        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    setupModal("openModal", "modal", "closeModal");
    setupModal("openMap", "mapModal", "closeMap");
    setupModal("openDonate", "donationModal", "closeDonate");
    setupModal("openContact", "contactModal", "closeContact");

    // Copy Phone Number Functionality
    const copyPhoneBtn = document.getElementById("copyPhone");
    const phoneNumber = document.getElementById("phoneNumber");
    const copySuccessMsg = document.getElementById("copySuccess");

    copyPhoneBtn.addEventListener("click", function () {
        navigator.clipboard.writeText(phoneNumber.textContent).then(() => {
            copySuccessMsg.style.display = "inline";
            setTimeout(() => {
                copySuccessMsg.style.display = "none";
            }, 2000);
        });
    });
});
