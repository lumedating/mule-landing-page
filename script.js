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

  // Email input and join button functionality
  const emailField = document.querySelector(".email-field");
  const joinBtn = document.querySelector(".join-btn");

  if (joinBtn) {
    joinBtn.addEventListener("click", function () {
      const email = emailField.value.trim();

      // Remove any existing error state
      emailField.classList.remove("error");

      if (email && isValidEmail(email)) {
        // Submit to Mailchimp
        submitToMailchimp(email);
      } else {
        // Show error state
        emailField.classList.add("error");
        alert("Please enter a valid email address.");
      }
    });
  }

  // Email validation function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Submit email to Mailchimp
  function submitToMailchimp(email) {
    // Create a hidden form to submit to Mailchimp
    const form = document.createElement("form");
    form.method = "POST";
    form.action =
      "https://app.us16.list-manage.com/subscribe/post?u=69e5fa6ca2baf6ece0911425e&amp;id=42b846fdb0&amp;f_id=009823e0f0";
    form.target = "_blank";
    form.style.display = "none";

    // Add the email field
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "EMAIL";
    emailInput.value = email;
    form.appendChild(emailInput);

    // Add the honeypot field (required by Mailchimp)
    const honeypotInput = document.createElement("input");
    honeypotInput.type = "text";
    honeypotInput.name = "b_69e5fa6ca2baf6ece0911425e_42b846fdb0";
    honeypotInput.value = "";
    honeypotInput.style.position = "absolute";
    honeypotInput.style.left = "-5000px";
    form.appendChild(honeypotInput);

    // Add form to page, submit it, and remove it
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    // Show success modal
    showModal();
    emailField.value = "";
  }

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
});

// Modal functions
function showModal() {
  const modal = document.getElementById("successModal");
  modal.classList.add("show");
}

function closeModal() {
  const modal = document.getElementById("successModal");
  modal.classList.remove("show");
}

// Close modal when clicking outside of it
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("successModal");
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });
});
