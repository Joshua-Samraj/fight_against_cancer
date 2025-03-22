document.addEventListener("DOMContentLoaded", function () {
    // Select audio element
    const audio = document.getElementById("audio");
    let isPlaying = false;

    function playMusic() {
        if (!isPlaying) {
            audio.play().then(() => {
                console.log("Music started.");
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
        let startX = 0;
        let endX = 0;

        function updateSlidePosition() {
            slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
        }

        function nextSlide() {
            slideIndex = (slideIndex + 1) % totalSlides;
            updateSlidePosition();
        }

        function prevSlide() {
            slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
            updateSlidePosition();
        }

        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 5000);
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        startAutoSlide(); // Start auto-slide initially

        // Pause slider on hover and resume on mouse leave
        slider.addEventListener("mouseenter", stopAutoSlide);
        slider.addEventListener("mouseleave", startAutoSlide);

        // Attach event listeners for next/prev buttons
        slider.querySelector(".next").addEventListener("click", function () {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
            playMusic(); // Start music when clicking the next button
        });

        slider.querySelector(".prev").addEventListener("click", function () {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
            playMusic(); // Start music when clicking the previous button
        });

        // Swipe functionality
        slider.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        });

        slider.addEventListener("touchend", (e) => {
            endX = e.changedTouches[0].clientX;
            if (startX - endX > 50) {
                stopAutoSlide();
                nextSlide();
                startAutoSlide();
                playMusic(); // Start music on swipe left (next slide)
            } else if (endX - startX > 50) {
                stopAutoSlide();
                prevSlide();
                startAutoSlide();
                playMusic(); // Start music on swipe right (previous slide)
            }
        });
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
