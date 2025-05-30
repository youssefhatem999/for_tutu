// Set the anniversary date (May 5th)
const anniversaryDate = new Date('2025-05-05T00:00:00');

// Function to get next anniversary date (May 5th)
function getNextAnniversary() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const anniversary = new Date(currentYear, 4, 5); // Month is 0-based, so 4 = May
    
    // If anniversary has passed this year, set it for next year
    if (now > anniversary) {
        anniversary.setFullYear(currentYear + 1);
    }
    
    return anniversary;
}

// Function to get next birthday date (May 31st)
function getNextBirthday() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const birthday = new Date(currentYear, 4, 31); // Month is 0-based, so 4 = May
    
    // If birthday has passed this year, set it for next year
    if (now > birthday) {
        birthday.setFullYear(currentYear + 1);
    }
    
    return birthday;
}

// Update countdowns every second
function updateCountdowns() {
    const now = new Date();
    
    // Update anniversary countdown
    const anniversaryDiff = getNextAnniversary() - now;
    updateCountdownDisplay(anniversaryDiff, 'days', 'hours', 'minutes', 'seconds');
    
    // Update birthday countdown
    const birthdayDiff = getNextBirthday() - now;
    updateCountdownDisplay(birthdayDiff, 'bday-days', 'bday-hours', 'bday-minutes', 'bday-seconds');
}

function updateCountdownDisplay(diff, daysId, hoursId, minutesId, secondsId) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById(daysId).textContent = String(days).padStart(2, '0');
    document.getElementById(hoursId).textContent = String(hours).padStart(2, '0');
    document.getElementById(minutesId).textContent = String(minutes).padStart(2, '0');
    document.getElementById(secondsId).textContent = String(seconds).padStart(2, '0');
}

// Update countdowns immediately and then every second
updateCountdowns();
setInterval(updateCountdowns, 1000);

// Add click handlers for the buttons
document.addEventListener('DOMContentLoaded', () => {
    const letterButton = document.getElementById('letterBtn');
    const distanceButton = document.getElementById('distanceBtn');
    const tutuKikiButton = document.getElementById('tutuKikiBtn');
    const animationButton = document.getElementById('animationBtn');
    const birthdayButton = document.getElementById('birthdayBtn');

    letterButton.addEventListener('click', () => {
        window.location.href = 'love-letter.html';
    });

    distanceButton.addEventListener('click', () => {
        window.location.href = 'distance.html';
    });

    tutuKikiButton.addEventListener('click', () => {
        window.location.href = 'tutu-kiki.html';
    });

    birthdayButton.addEventListener('click', () => {
        window.location.href = 'birthday.html';
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