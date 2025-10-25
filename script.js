// Lume Dating App Landing Page
document.addEventListener("DOMContentLoaded", function () {
  console.log("Lume landing page loaded successfully!");

  // Image carousel functionality
  const carouselImages = document.querySelectorAll(".carousel-image");
  let currentImageIndex = 0;

  function cycleImages() {
    // Remove active class from current image
    carouselImages[currentImageIndex].classList.remove("active");

    // Move to next image
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;

    // Add active class to new image
    carouselImages[currentImageIndex].classList.add("active");
  }

  // Start the carousel cycle (3 seconds per image)
  setInterval(cycleImages, 3000);

  // Answer button interactions (for demo purposes)
  const answerBtns = document.querySelectorAll(".answer-btn");
  answerBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Add visual feedback
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "scale(1)";
      }, 150);
    });
  });

  // Download button functionality
  const downloadBtn = document.querySelector(".download-btn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", function (e) {
      // Check if device is mobile/tablet
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth <= 1024;

      if (!isMobile) {
        // Desktop: prevent default link behavior and show QR modal
        e.preventDefault();
        showQRModal();
      }
      // Mobile: allow default link behavior (redirect to App Store)
    });
  }
});

// QR Modal functions
function showQRModal() {
  const modal = document.getElementById("qrModal");
  modal.classList.add("show");
}

function closeQRModal() {
  const modal = document.getElementById("qrModal");
  modal.classList.remove("show");
}

// Close QR modal when clicking outside of it
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("qrModal");
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeQRModal();
      }
    });
  }
});
