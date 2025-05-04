// Set the next visit date (you can change this date)
const nextVisitDate = new Date('2024-06-01T00:00:00');

// Update countdown every second
function updateCountdown() {
    const now = new Date();
    const diff = nextVisitDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Create floating hearts
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤';
    heart.style.position = 'absolute';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    heart.style.animation = `float ${Math.random() * 3 + 2}s linear forwards`;
    document.querySelector('.hearts').appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create hearts periodically
setInterval(createFloatingHeart, 300);

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0) rotate(0deg);
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style); 