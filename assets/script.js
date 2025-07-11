// JavaScript untuk efek interaktif GitHub Profile

// Particle effect
function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.position = 'fixed';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.pointerEvents = 'none';
    particleContainer.style.zIndex = '-1';
    document.body.appendChild(particleContainer);

    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDuration = Math.random() * 3 + 2 + 's';
        particleContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 5000);
    }, 300);
}

// Typing effect
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Smooth scroll untuk anchor links
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

// Intersection Observer untuk animasi saat scroll
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Matrix rain effect
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.className = 'matrix-bg';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(13, 17, 23, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00D9FF';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 35);
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Konami code easter egg
function konamiCode() {
    const konamiSequence = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    let userSequence = [];
    
    document.addEventListener('keydown', (e) => {
        userSequence.push(e.code);
        
        if (userSequence.length > konamiSequence.length) {
            userSequence.shift();
        }
        
        if (JSON.stringify(userSequence) === JSON.stringify(konamiSequence)) {
            activateEasterEgg();
            userSequence = [];
        }
    });
}

function activateEasterEgg() {
    // Tambahkan efek khusus saat konami code diaktifkan
    document.body.style.animation = 'rainbow 2s infinite';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        document.body.style.animation = '';
        style.remove();
    }, 10000);
    
    // Tampilkan pesan easter egg
    const message = document.createElement('div');
    message.innerHTML = '🎉 Konami Code Activated! 🎉';
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.background = 'rgba(0, 217, 255, 0.9)';
    message.style.color = 'white';
    message.style.padding = '20px';
    message.style.borderRadius = '10px';
    message.style.fontSize = '24px';
    message.style.zIndex = '9999';
    message.style.animation = 'bounce 1s infinite';
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Theme switcher
function createThemeSwitcher() {
    const switcher = document.createElement('button');
    switcher.innerHTML = '🌙';
    switcher.style.position = 'fixed';
    switcher.style.top = '20px';
    switcher.style.right = '20px';
    switcher.style.background = 'rgba(0, 217, 255, 0.8)';
    switcher.style.border = 'none';
    switcher.style.borderRadius = '50%';
    switcher.style.width = '50px';
    switcher.style.height = '50px';
    switcher.style.fontSize = '20px';
    switcher.style.cursor = 'pointer';
    switcher.style.zIndex = '1000';
    switcher.style.transition = 'all 0.3s ease';
    
    switcher.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        switcher.innerHTML = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
    });
    
    document.body.appendChild(switcher);
}

// Cursor trail effect
function createCursorTrail() {
    const trail = [];
    const trailLength = 20;
    
    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.style.position = 'fixed';
        dot.style.width = '4px';
        dot.style.height = '4px';
        dot.style.background = '#00D9FF';
        dot.style.borderRadius = '50%';
        dot.style.pointerEvents = 'none';
        dot.style.zIndex = '9999';
        dot.style.opacity = (i / trailLength).toString();
        document.body.appendChild(dot);
        trail.push(dot);
    }
    
    document.addEventListener('mousemove', (e) => {
        trail.forEach((dot, index) => {
            setTimeout(() => {
                dot.style.left = e.clientX + 'px';
                dot.style.top = e.clientY + 'px';
            }, index * 10);
        });
    });
}

// Loading animation
function showLoadingAnimation() {
    const loader = document.createElement('div');
    loader.className = 'loading-screen';
    loader.innerHTML = `
        <div class="loading-spinner">
            <div class="loading"></div>
            <p>Loading awesome profile...</p>
        </div>
    `;
    loader.style.position = 'fixed';
    loader.style.top = '0';
    loader.style.left = '0';
    loader.style.width = '100%';
    loader.style.height = '100%';
    loader.style.background = 'rgba(13, 17, 23, 0.9)';
    loader.style.display = 'flex';
    loader.style.justifyContent = 'center';
    loader.style.alignItems = 'center';
    loader.style.zIndex = '10000';
    loader.style.color = '#00D9FF';
    
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 2000);
}

// Initialize semua efek
document.addEventListener('DOMContentLoaded', () => {
    showLoadingAnimation();
    createParticles();
    smoothScroll();
    observeElements();
    createMatrixRain();
    konamiCode();
    createThemeSwitcher();
    createCursorTrail();
    
    // Tambahkan class animate-on-scroll ke elemen yang ingin dianimasi
    document.querySelectorAll('h2, .card, .badge').forEach(el => {
        el.classList.add('animate-on-scroll');
    });
});

// Console easter egg
console.log(`
    ██╗   ██╗██╗   ██╗██████╗ ██╗    ██████╗  █████╗ ██╗      █████╗ 
    ╚██╗ ██╔╝██║   ██║██╔══██╗██║    ██╔══██╗██╔══██╗██║     ██╔══██╗
     ╚████╔╝ ██║   ██║██████╔╝██║    ██████╔╝███████║██║     ███████║
      ╚██╔╝  ██║   ██║██╔══██╗██║    ██╔══██╗██╔══██║██║     ██╔══██║
       ██║   ╚██████╔╝██████╔╝██║    ██████╔╝██║  ██║███████╗██║  ██║
       ╚═╝    ╚═════╝ ╚═════╝ ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
                                                                      
    🚀 Welcome to my GitHub Profile!
    💻 Full Stack Developer | Tech Enthusiast
    🌟 Always learning and growing
    
    Try the Konami Code: ↑↑↓↓←→←→BA
`);

console.log('���� Interested in my work? Let\'s connect!');
console.log('📧 Email: yubiwangak19@gmail.com');
console.log('🔗 LinkedIn: https://linkedin.com/in/yubiwangak19');
console.log('🐦 Twitter: https://twitter.com/yubiwangak19');