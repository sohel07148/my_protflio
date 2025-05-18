// Modal functionality
const modal = document.getElementById('hireModal');
const hireBtn = document.getElementById('hireMeBtn');
const closeBtn = document.getElementById('closeModal');

// Open modal when Hire Me button is clicked
hireBtn?.addEventListener('click', function (e) {
  e.preventDefault();
  modal.style.display = 'flex';
});

// Close modal when X is clicked
closeBtn?.addEventListener('click', function () {
  modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Form submission handling
const hireForm = document.querySelector('.hire-form');
if (hireForm) {
  hireForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const formData = new FormData(hireForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    // Send Email via Formspree
    fetch(hireForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        alert('Thank you for your message! I will get back to you soon.');
        hireForm.reset();
        modal.style.display = 'none';
      } else {
        alert('Oops! Something went wrong. Please try again.');
      }
    });

    // Send WhatsApp Message
    const whatsappNumber = '918624899967'; // Your WhatsApp number (without +)
    const whatsappMessage = `Hello Sohel, I want to hire you.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank');
  });
}
