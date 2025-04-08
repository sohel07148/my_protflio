// Initialize AOS animations
AOS.init({ duration: 1000, once: true });

// See More button toggle logic
const seeMoreBtn = document.querySelector('.see-more-btn');
const extraSkills = document.querySelector('.extra-skills');

seeMoreBtn.addEventListener('click', () => {
  const isVisible = extraSkills.style.display === 'block';
  extraSkills.style.display = isVisible ? 'none' : 'block';
  seeMoreBtn.textContent = isVisible ? 'See More' : 'See Less';
  if (!isVisible) {
    extraSkills.scrollIntoView({ behavior: 'smooth' });
  }
});

// Modal open/close
const hireBtn = document.getElementById('hireMeBtn');
const modal = document.getElementById('hireModal');
const closeModal = document.getElementById('closeModal');

hireBtn.addEventListener('click', function (e) {
  e.preventDefault();
  modal.style.display = 'flex';
});

closeModal.addEventListener('click', function () {
  modal.style.display = 'none';
});

window.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Form submit handler
document.querySelector('.hire-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const reason = document.getElementById('reason').value.trim();
  
    // Send to Formspree
    fetch("https://formspree.io/f/maneolay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, email, reason })
    })
    .then(() => {
      // Open WhatsApp with prefilled message
      const message = `Hello Sohel,%0AI am *${name}*.%0AHere are my details:%0A📞 Phone: ${phone}%0A📧 Email: ${email}%0A📝 Reason: ${reason}`;
      const whatsappURL = `https://wa.me/918624899967?text=${message}`;
      window.open(whatsappURL, '_blank');
  
      alert("Thank you! Your message has been sent.");
      document.querySelector('.hire-form').reset();
      document.getElementById('hireModal').style.display = 'none';
    })
    .catch(() => {
      alert("Oops! Something went wrong. Try again later.");
    });
  });
  
