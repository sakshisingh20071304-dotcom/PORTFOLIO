document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor-glow');
    
    // Smooth Cursor Glow Movement
    document.addEventListener('mousemove', (e) => {
        cursor.animate({
            left: `${e.clientX}px`,
            top: `${e.clientY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Cursor interaction with links
    const links = document.querySelectorAll('a, button, .project-card, .skill-card');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.width = '100px';
            cursor.style.height = '100px';
            cursor.style.background = 'radial-gradient(circle, var(--primary) 0%, transparent 70%)';
            cursor.style.opacity = '0.4';
        });
        link.addEventListener('mouseleave', () => {
            cursor.style.width = '400px';
            cursor.style.height = '400px';
            cursor.style.background = 'radial-gradient(circle, rgba(0, 210, 255, 0.08) 0%, transparent 70%)';
            cursor.style.opacity = '1';
        });
    });

    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply reveal to sections
    document.querySelectorAll('.skill-card, .project-card, .about-text h2').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });

    // Intersection observer logic to toggle 'revealed' class
    // We add a class to trigger the CSS transition
    document.addEventListener('scroll', () => {
        document.querySelectorAll('.skill-card, .project-card').forEach(el => {
            const rect = el.getBoundingClientRect();
            if(rect.top < window.innerHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    });

    // Contact Form Interactivity
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = 'Sending...';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerText = 'Message Sent!';
            btn.style.background = 'var(--accent)';
            form.reset();
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.background = '';
                btn.disabled = false;
            }, 3000);
        }, 1500);
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
