document.addEventListener("DOMContentLoaded", function () {
    // Automatic Image Slider for each slider container
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach((slider) => {
        let slideIndex = 0;
        const slidesContainer = slider.querySelector(".slides");
        const slides = slider.querySelectorAll(".slide");
        const totalSlides = slides.length;

        function updateSlidePosition() {
            slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
        }

        function nextSlide() {
            resetAutoSlide(); // Reset auto-slide before moving to the next
            slideIndex = (slideIndex + 1) % totalSlides;
            updateSlidePosition();
        }

        function prevSlide() {
            resetAutoSlide(); // Reset auto-slide before moving to the previous
            slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
            updateSlidePosition();
        }

        let autoSlideInterval = setInterval(nextSlide, 5000);

        function resetAutoSlide() {
            clearInterval(autoSlideInterval); // Stop the previous interval
            autoSlideInterval = setInterval(nextSlide, 3000); // Restart it
        }

        // Attach event listeners for next/prev buttons
        slider.querySelector(".next").addEventListener("click", function () {
            nextSlide();
        });

        slider.querySelector(".prev").addEventListener("click", function () {
            prevSlide();
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
