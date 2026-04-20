// Initialize Theme (Run immediately to prevent flash)
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

document.addEventListener('DOMContentLoaded', () => {


    // Inject Font Awesome
    if (!document.getElementById('font-awesome-cdn')) {
        const fa = document.createElement('link');
        fa.id = 'font-awesome-cdn';
        fa.rel = 'stylesheet';
        fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(fa);
    }

    const headerHTML = `
    <nav class="glass-nav">
        <div class="nav-container">
            <a href="index.html" class="logo">Sakshi<span>.</span></a>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="skills.html">Skills</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="experience.html">Journey</a></li>
                <li><a href="resume.html">Resume</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>

            <div class="nav-actions">
                <div class="social-links-nav">
                    <a href="https://github.com/sakshisingh20071304-dotcom" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
                    <a href="https://linkedin.com/in/sakshisingh2007" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
                    <a href="mailto:sakshi_singh25@mru.ac.in" title="Email"><i class="fas fa-envelope"></i></a>
                </div>
                <button class="theme-toggle" id="theme-toggle" title="Toggle Theme">
                    <i class="fas fa-sun"></i>
                    <i class="fas fa-moon"></i>
                </button>
            </div>
            <div class="menu-toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </nav>
    <div class="cursor-glow"></div>
    <div class="bg-noise"></div>
    `;

    const footerHTML = `
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-info">
                    <div class="footer-logo">Sakshi<span>.</span></div>
                    <p>Building the future with AI & Creative Engineering.</p>
                    <div class="social-links-footer">
                        <a href="https://github.com/sakshisingh20071304-dotcom" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                        <a href="https://linkedin.com/in/sakshisingh2007" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
                        <a href="mailto:sakshi_singh25@mru.ac.in"><i class="fas fa-envelope"></i> Email</a>
                    </div>
                </div>
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <a href="index.html">Home</a>
                    <a href="about.html">About</a>
                    <a href="projects.html">Projects</a>
                    <a href="resume.html">Resume</a>
                    <a href="contact.html">Contact</a>
                </div>

            </div>
            <p class="copyright">&copy; 2026 Sakshi Singh. Built with passion & precision.</p>
        </div>
    </footer>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Re-initialize cursor glow for new pages
    const cursor = document.querySelector('.cursor-glow');
    document.addEventListener('mousemove', (e) => {
        if (cursor) {
            cursor.animate({
                left: `${e.clientX}px`,
                top: `${e.clientY}px`
            }, { duration: 500, fill: "forwards" });
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
});
