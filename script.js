// Background animation
const starsContainer = document.getElementById('stars-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
starsContainer.appendChild(renderer.domElement);

const geometry = new THREE.BufferGeometry();
const vertices = [];

for (let i = 0; i < 5000; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = (Math.random() - 0.5) * 2000;
    vertices.push(x, y, z);
}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

const material = new THREE.PointsMaterial({ color: 0x8c5eff, size: 2 });
const stars = new THREE.Points(geometry, material);
scene.add(stars);

camera.position.z = 1000;

function animate() {
    requestAnimationFrame(animate);
    stars.rotation.x += 0.0005;
    stars.rotation.y += 0.0005;
    renderer.render(scene, camera);
}

animate();

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission (you'll need to implement the actual submission logic)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Implement your form submission logic here
    alert('Form submitted!');
});

// Skill progress animation
function animateSkills() {
    const skills = document.querySelectorAll('.skill-icon');
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.setProperty('--progress', '100%');
        }, index * 200);
    });
}

// Trigger skill animation when the skills section is in view
const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        animateSkills();
        observer.unobserve(skillsSection);
    }
}, { threshold: 0.5 });

observer.observe(skillsSection);

// Responsive navigation
const nav = document.querySelector('nav');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        nav.style.top = '-100px';
    } else {
        nav.style.top = '0';
    }
    lastScrollTop = scrollTop;
});

// Add this to your existing script.js file

document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('.page-transition');
    
    if (mainContent) {
        setTimeout(() => {
            mainContent.classList.add('visible');
        }, 100);
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('.page-transition');
    const backgroundMusic = document.getElementById('background-music');
    
    if (mainContent) {
        setTimeout(() => {
            mainContent.classList.add('visible');
        }, 100);
    }

    // Background music functionality
    let musicPlaying = false;

    function toggleMusic() {
        if (musicPlaying) {
            backgroundMusic.pause();
        } else {
            backgroundMusic.play();
        }
        musicPlaying = !musicPlaying;
    }

    // Play music on first user interaction
    document.body.addEventListener('click', () => {
        if (!musicPlaying) {
            toggleMusic();
        }
    }, { once: true });

    // Create music control button
    const musicButton = document.createElement('button');
    musicButton.innerHTML = '🔇';
    musicButton.style.position = 'fixed';
    musicButton.style.bottom = '20px';
    musicButton.style.right = '20px';
    musicButton.style.zIndex = '1000';
    musicButton.style.background = 'rgba(0, 0, 0, 0.5)';
    musicButton.style.color = 'white';
    musicButton.style.border = 'none';
    musicButton.style.borderRadius = '50%';
    musicButton.style.width = '40px';
    musicButton.style.height = '40px';
    musicButton.style.fontSize = '20px';
    musicButton.style.cursor = 'pointer';

    musicButton.addEventListener('click', () => {
        toggleMusic();
        musicButton.innerHTML = musicPlaying ? '🔊' : '🔇';
    });

    document.body.appendChild(musicButton);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Star background animation
function createStarBackground() {
    const starsContainer = document.getElementById('stars-container');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    starsContainer.appendChild(renderer.domElement);

    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({color: 0xFFFFFF});

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        starVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    camera.position.z = 1;

    function animate() {
        requestAnimationFrame(animate);
        stars.rotation.x += 0.0002;
        stars.rotation.y += 0.0002;
        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

createStarBackground();