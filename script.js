// Modal functionality
const modal = document.getElementById('hireModal');
const hireBtn = document.getElementById('hireMeBtn');
const closeBtn = document.getElementById('closeModal');

// Open modal when Hire Me button is clicked
hireBtn?.addEventListener('click', function (e) {
  e.preventDefault();
  modal.classList.add('show');
  modal.style.display = 'flex';
  document.body.classList.add('modal-open');
});

// Close modal when X is clicked
closeBtn?.addEventListener('click', function () {
  modal.classList.remove('show');
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');
});

// Close modal when clicking outside
window.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.classList.remove('show');
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
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
        modal.classList.remove('show');
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
      } else {
        alert('Oops! Something went wrong. Please try again.');
      }
    });

    // Send WhatsApp Message
    const whatsappNumber = '918624899967';
    const whatsappMessage = `Hello Sohel, I want to hire you.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
  });
}

// Skills Section Show More Button
const seeMoreBtn = document.querySelector('.see-more-btn');
const extraSkills = document.querySelector('.extra-skills');

if (seeMoreBtn && extraSkills) {
  seeMoreBtn.addEventListener('click', () => {
    extraSkills.style.display = extraSkills.style.display === 'block' ? 'none' : 'block';
    seeMoreBtn.textContent = extraSkills.style.display === 'block' ? 'Show Less' : 'Show More';
  });
}
