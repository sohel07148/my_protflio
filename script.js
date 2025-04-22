// Initialize AOS animation
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

// Toggle skills section
document.querySelector('.see-more-btn').addEventListener('click', function() {
  const extraSkills = document.querySelector('.extra-skills');
  const btn = this;
  
  if (extraSkills.style.display === 'none' || !extraSkills.style.display) {
    extraSkills.style.display = 'block';
    btn.textContent = 'Show Less';
  } else {
    extraSkills.style.display = 'none';
    btn.textContent = 'See More';
  }
});

// Modal functionality
const modal = document.getElementById('hireModal');
const hireBtn = document.getElementById('hireMeBtn');
const closeBtn = document.getElementById('closeModal');

// Open modal when Hire Me button is clicked
hireBtn.addEventListener('click', function(e) {
  e.preventDefault();
  modal.style.display = 'flex'; // Changed to flex to match your original
});

// Close modal when X is clicked
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Form submission handling
const hireForm = document.querySelector('.hire-form');
if (hireForm) {
  hireForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the form data
    // For now, we'll just close the modal and show an alert
    modal.style.display = 'none';
    alert('Thank you for your message! I will get back to you soon.');
    hireForm.reset();
  });
}