document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const openModal = document.getElementById("openModal");
    const closeModal = document.getElementById("closeModal");

    const donationModal = document.getElementById("donationModal");
    const openDonate = document.getElementById("openDonate");
    const closeDonate = document.getElementById("closeDonate");

    const mapModal = document.getElementById("mapModal");
    const openMap = document.getElementById("openMap");
    const closeMap = document.getElementById("closeMap");

    if (openModal && modal && closeModal) {
        openModal.addEventListener("click", function (event) {
            event.preventDefault();
            modal.style.display = "block";
        });

        closeModal.addEventListener("click", function () {
            modal.style.display = "none";
        });
    }

    if (openDonate && donationModal && closeDonate) {
        openDonate.addEventListener("click", function (event) {
            event.preventDefault();
            donationModal.style.display = "block";
        });

        closeDonate.addEventListener("click", function () {
            donationModal.style.display = "none";
        });
    }

    if (openMap && mapModal && closeMap) {
        openMap.addEventListener("click", function (event) {
            event.preventDefault();
            mapModal.style.display = "block";
        });

        closeMap.addEventListener("click", function () {
            mapModal.style.display = "none";
        });
    }

    window.addEventListener("click", function (event) {
        if (modal && event.target === modal) {
            modal.style.display = "none";
        }
        if (donationModal && event.target === donationModal) {
            donationModal.style.display = "none";
        }
        if (mapModal && event.target === mapModal) {
            mapModal.style.display = "none";
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("donationModal");
    const openDonation = document.getElementById("openDonate");
    const closeDonation = document.getElementById("closeDonate");

    let currentIndex = 0;
    const slides = document.querySelector(".slider-container");
    const totalSlides = document.querySelectorAll(".slide").length;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    // Auto-slide every 3 seconds
    setInterval(nextSlide, 3000);

    // Event Listeners
    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev").addEventListener("click", prevSlide);

    openDonation.addEventListener("click", function (event) {
        event.preventDefault();
        modal.style.display = "block";
    });

    closeDonation.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
let index = 0;

function showSlide(n) {
    let slides = document.querySelector(".slides");
    let totalSlides = document.querySelectorAll(".slide").length;
    
    if (n >= totalSlides) {
        index = 0;
    } else if (n < 0) {
        index = totalSlides - 1;
    } else {
        index = n;
    }
    
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);
document.addEventListener("DOMContentLoaded", function() {
    // Contact Modal
    const contactModal = document.getElementById("contactModal");
    const openContact = document.getElementById("openContact");
    const closeContact = document.getElementById("closeContact");

    openContact.addEventListener("click", function() {
        contactModal.style.display = "block";
    });

    closeContact.addEventListener("click", function() {
        contactModal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === contactModal) {
            contactModal.style.display = "none";
        }
    });

    // Copy Phone Number to Clipboard
    const phoneNumber = document.getElementById("phoneNumber").innerText;
    const copyPhone = document.getElementById("copyPhone");
    const copySuccess = document.getElementById("copySuccess");

    copyPhone.addEventListener("click", function() {
        navigator.clipboard.writeText(phoneNumber).then(() => {
            copySuccess.style.display = "block"; // Show success message
            setTimeout(() => {
                copySuccess.style.display = "none"; // Hide after 2 sec
            }, 2000);
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    });
});
