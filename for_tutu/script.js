// Set the anniversary date (May 5th)
const anniversaryDate = new Date('2025-05-05T00:00:00');

// Update countdown every second
function updateCountdown() {
    const now = new Date();
    const diff = anniversaryDate - now;

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

// Add click handlers for the buttons
document.getElementById('memoryBtn').addEventListener('click', () => {
    // Will be implemented later
    alert('Our memories section coming soon!');
});

document.addEventListener('DOMContentLoaded', () => {
    const letterButton = document.getElementById('letterButton');
    const distanceButton = document.getElementById('distanceButton');
    const futureButton = document.getElementById('futureButton');

    letterButton.addEventListener('click', () => {
        window.location.href = 'love-letter.html';
    });

    distanceButton.addEventListener('click', () => {
        window.location.href = 'distance.html';
    });

    futureButton.addEventListener('click', () => {
        window.location.href = 'future.html';
    });

    // Create floating hearts
    createFloatingHearts();
});

function createFloatingHearts() {
    const container = document.querySelector('.container');
    const colors = ['#ff6b6b', '#ff8e8e', '#ffb3b3', '#ffd8d8'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.position = 'fixed';
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = '100%';
        heart.style.opacity = '0';
        heart.style.transition = 'all 4s ease-out';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '-1';

        container.appendChild(heart);

        // Trigger animation
        setTimeout(() => {
            heart.style.opacity = '1';
            heart.style.top = '-10%';
            heart.style.transform = `rotate(${Math.random() * 360}deg)`;
        }, 10);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 300);
}