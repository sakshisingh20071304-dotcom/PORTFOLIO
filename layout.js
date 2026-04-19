document.addEventListener('DOMContentLoaded', () => {
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
                <li><a href="blog.html">Blog</a></li>
                <li><a href="collaborations.html">Collaborate</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <div class="menu-toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </nav>
    <div class="cursor-glow"></div>
    `;

    const footerHTML = `
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">Sakshi<span>.</span></div>
                <div class="footer-links">
                    <a href="index.html">Home</a>
                    <a href="about.html">About</a>
                    <a href="projects.html">Projects</a>
                </div>
            </div>
            <p class="copyright">&copy; 2026 Sakshi Singh. Built with passion & precision.</p>
        </div>
    </footer>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Re-initialize cursor glow for new pages
    const cursor = document.querySelector('.cursor-glow');
    document.addEventListener('mousemove', (e) => {
        cursor.animate({
            left: `${e.clientX}px`,
            top: `${e.clientY}px`
        }, { duration: 500, fill: "forwards" });
    });
});
