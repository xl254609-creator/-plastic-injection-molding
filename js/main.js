/* ==========================================================================
   Haiqiang Plastic Injection Molding - Main JavaScript
   Handles: Mobile navigation, FAQ accordion, RFQ form, footer year
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- Mobile Navigation Toggle ---------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when a link is clicked (mobile)
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- FAQ Accordion ---------- */
  const accordion = document.getElementById('faqAccordion');

  if (accordion) {
    accordion.querySelectorAll('.accordion-item').forEach(function (item) {
      const header = item.querySelector('.accordion-header');
      const body = item.querySelector('.accordion-body');

      header.addEventListener('click', function () {
        const isActive = item.classList.contains('active');

        // Close all items
        accordion.querySelectorAll('.accordion-item').forEach(function (other) {
          other.classList.remove('active');
          other.querySelector('.accordion-body').style.maxHeight = null;
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
          item.classList.add('active');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    });
  }

  /* ---------- RFQ Form Submission ---------- */
  const rfqForm = document.getElementById('rfqForm');
  const formSuccess = document.getElementById('formSuccess');

  if (rfqForm) {
    rfqForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic validation
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      let valid = true;

      if (!name.value.trim()) { valid = false; name.style.borderColor = '#e74c3c'; }
      if (!email.value.trim() || !isValidEmail(email.value)) { valid = false; email.style.borderColor = '#e74c3c'; }
      if (!message.value.trim()) { valid = false; message.style.borderColor = '#e74c3c'; }

      if (!valid) { alert('Please fill in all required fields correctly.'); return; }

      // In a real deployment, send data to your email/CRM endpoint here.
      // For static hosting (GitHub Pages), use a service like Formspree or
      // connect to your backend. Example below shows the collected data.

      const data = {
        name: name.value.trim(),
        company: document.getElementById('company').value.trim(),
        email: email.value.trim(),
        phone: document.getElementById('phone').value.trim(),
        product: document.getElementById('product').value,
        quantity: document.getElementById('quantity').value.trim(),
        material: document.getElementById('material').value,
        message: message.value.trim(),
        timestamp: new Date().toISOString()
      };

      console.log('RFQ Submission:', data);

      // Show success message
      if (formSuccess) {
        formSuccess.style.display = 'block';
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Reset form
      rfqForm.reset();
      [name, email, message].forEach(function (field) {
        field.style.borderColor = '';
      });
    });
  }

  /* ---------- Email Validation Helper ---------- */
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  /* ---------- Footer Year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

})();
