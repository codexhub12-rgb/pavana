// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Form Handling
    const cleanForm = document.getElementById('cleanForm');
    const successMsg = document.getElementById('successMsg');

    if (cleanForm) {
        cleanForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('bookName').value;
            const email = document.getElementById('bookEmail').value;
            const contact = document.getElementById('bookContact').value;
            const service = document.getElementById('bookService').value;

            // Construct WhatsApp message
            const message = `Hello, I want to book you. These are my details:\n\nName: ${name}\nEmail: ${email}\nContact Number: ${contact}\nService Type: ${service}`;
            const whatsappUrl = `https://wa.me/233555357010?text=${encodeURIComponent(message)}`;
            
            // Open WhatsApp in a new tab
            window.open(whatsappUrl, '_blank');

            this.style.opacity = '0';
            setTimeout(() => {
                this.style.display = 'none';
                successMsg.style.display = 'block';
                successMsg.style.opacity = '1';
                successMsg.style.transform = 'translateY(0)';
            }, 300);
        });
    }

    // Sticky Nav Effect
    const nav = document.querySelector('.glass-nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.style.padding = '0';
            nav.style.boxShadow = 'var(--shadow-soft)';
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            nav.style.padding = '10px 0';
            nav.style.boxShadow = 'none';
            nav.style.background = 'rgba(255, 255, 255, 0.8)';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
