const downloadUrl = 'https://www.dropbox.com/scl/fi/5gbfzw77vn6lurefvgfnq/zawixLauncher-22.07.2025.apk?rlkey=d8edg79fx3s4psneb1qym89rs&st=fyvszvh8&dl=1';

function createParticles() {
    const container = document.querySelector('.floating-particles');
    const colors = ['#00ffff', '#ff00ff', '#00ff00', '#ffff00'];
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
        container.appendChild(particle);
    }
}

function directDownload() {
    window.location.assign(downloadUrl);
}

function setupDownloadLinks() {
    const downloadButtons = ['headerDownload', 'heroDownload', 'mainDownload'];
    downloadButtons.forEach(id => {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                directDownload();
            });
        }
    });
}

function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#') return;
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

window.addEventListener('load', () => {
    createParticles();
    setupDownloadLinks();
    smoothScroll();
});

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});