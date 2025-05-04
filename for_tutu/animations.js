// Animation styles
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes float {
        0% { transform: translateY(0px) rotate(0deg); }
        25% { transform: translateY(-50px) rotate(90deg); }
        50% { transform: translateY(-100px) rotate(180deg); }
        75% { transform: translateY(-50px) rotate(270deg); }
        100% { transform: translateY(0px) rotate(360deg); }
    }

    @keyframes pulse {
        0% { transform: scale(1) rotate(0deg); }
        25% { transform: scale(1.5) rotate(90deg); }
        50% { transform: scale(2) rotate(180deg); }
        75% { transform: scale(1.5) rotate(270deg); }
        100% { transform: scale(1) rotate(360deg); }
    }

    @keyframes rotate {
        0% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(1.5); }
        100% { transform: rotate(360deg) scale(1); }
    }

    @keyframes rainbow {
        0% { color: #ff6b6b; }
        20% { color: #ffd166; }
        40% { color: #06d6a0; }
        60% { color: #118ab2; }
        80% { color: #ef476f; }
        100% { color: #ff6b6b; }
    }

    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-50px); }
    }

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }

    @keyframes buttonDance {
        0% { transform: translateY(0) rotate(0deg); }
        25% { transform: translateY(-10px) rotate(5deg); }
        50% { transform: translateY(0) rotate(0deg); }
        75% { transform: translateY(10px) rotate(-5deg); }
        100% { transform: translateY(0) rotate(0deg); }
    }

    @keyframes buttonGlow {
        0% { box-shadow: 0 0 5px rgba(255, 0, 0, 0.5); }
        50% { box-shadow: 0 0 20px rgba(255, 0, 0, 0.8); }
        100% { box-shadow: 0 0 5px rgba(255, 0, 0, 0.5); }
    }

    @keyframes timerDance {
        0% { transform: translateY(0) scale(1); }
        25% { transform: translateY(-5px) scale(1.1); }
        50% { transform: translateY(0) scale(1); }
        75% { transform: translateY(5px) scale(0.9); }
        100% { transform: translateY(0) scale(1); }
    }

    @keyframes timerGlow {
        0% { text-shadow: 0 0 5px rgba(255, 0, 0, 0.5); }
        50% { text-shadow: 0 0 15px rgba(255, 0, 0, 0.8); }
        100% { text-shadow: 0 0 5px rgba(255, 0, 0, 0.5); }
    }

    .floating-heart {
        position: fixed;
        font-size: 30px;
        animation: float 2s ease-in-out infinite;
        pointer-events: none;
        filter: drop-shadow(0 0 5px rgba(255, 0, 0, 0.5));
    }

    .pulsing-heart {
        position: fixed;
        font-size: 40px;
        animation: pulse 1.5s ease-in-out infinite;
        pointer-events: none;
        filter: drop-shadow(0 0 8px rgba(255, 0, 0, 0.7));
    }

    .rotating-heart {
        position: fixed;
        font-size: 35px;
        animation: rotate 2s linear infinite;
        pointer-events: none;
        filter: drop-shadow(0 0 6px rgba(255, 0, 0, 0.6));
    }

    .bouncing-heart {
        position: fixed;
        font-size: 32px;
        animation: bounce 1s ease-in-out infinite;
        pointer-events: none;
        filter: drop-shadow(0 0 7px rgba(255, 0, 0, 0.6));
    }

    .shaking-heart {
        position: fixed;
        font-size: 28px;
        animation: shake 0.5s ease-in-out infinite;
        pointer-events: none;
        filter: drop-shadow(0 0 4px rgba(255, 0, 0, 0.5));
    }

    .rainbow-text {
        animation: rainbow 1s linear infinite;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .container {
        animation: shake 0.5s ease-in-out;
    }

    .btn.animated {
        animation: buttonDance 0.5s ease-in-out infinite, buttonGlow 1.5s ease-in-out infinite;
        background: linear-gradient(45deg, #ff6b6b, #ffd166, #06d6a0, #118ab2, #ef476f);
        background-size: 400% 400%;
        animation: buttonDance 0.5s ease-in-out infinite, buttonGlow 1.5s ease-in-out infinite, rainbow 3s linear infinite;
    }

    .countdown-item.animated {
        animation: timerDance 0.5s ease-in-out infinite, timerGlow 1.5s ease-in-out infinite;
    }

    .countdown-item.animated span:first-child {
        animation: rainbow 1s linear infinite;
        font-size: 1.2em;
    }

    .countdown-item.animated span:last-child {
        animation: rainbow 1s linear infinite reverse;
        font-size: 0.9em;
    }
`;
document.head.appendChild(animationStyles);

// Animation functions
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.top = '-10vh';
        setTimeout(() => heart.remove(), 2000);
    }, 10);
}

function createPulsingHeart() {
    const heart = document.createElement('div');
    heart.className = 'pulsing-heart';
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    heart.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1500);
}

function createRotatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'rotating-heart';
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    heart.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
}

function createBouncingHeart() {
    const heart = document.createElement('div');
    heart.className = 'bouncing-heart';
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    heart.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
}

function createShakingHeart() {
    const heart = document.createElement('div');
    heart.className = 'shaking-heart';
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    heart.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 500);
}

function addRainbowEffect() {
    const title = document.querySelector('.title');
    const subtitle = document.querySelector('.subtitle');
    const container = document.querySelector('.container');
    const buttons = document.querySelectorAll('.btn');
    const countdownItems = document.querySelectorAll('.countdown-item');
    
    title.classList.add('rainbow-text');
    subtitle.classList.add('rainbow-text');
    container.classList.add('shake');
    buttons.forEach(button => {
        button.classList.add('animated');
    });
    countdownItems.forEach(item => {
        item.classList.add('animated');
    });

    setTimeout(() => {
        title.classList.remove('rainbow-text');
        subtitle.classList.remove('rainbow-text');
        container.classList.remove('shake');
        buttons.forEach(button => {
            button.classList.remove('animated');
        });
        countdownItems.forEach(item => {
            item.classList.remove('animated');
        });
    }, 5000);
}

// Main animation sequence
function playCuteAnimation() {
    // Disable the button during animation
    const button = document.getElementById('animationBtn');
    button.disabled = true;
    button.textContent = 'Playing...';

    // Add rainbow effect to text
    addRainbowEffect();

    // Create floating hearts
    const floatInterval = setInterval(createFloatingHeart, 200);
    
    // Create pulsing hearts
    const pulseInterval = setInterval(createPulsingHeart, 300);
    
    // Create rotating hearts
    const rotateInterval = setInterval(createRotatingHeart, 400);

    // Create bouncing hearts
    const bounceInterval = setInterval(createBouncingHeart, 250);

    // Create shaking hearts
    const shakeInterval = setInterval(createShakingHeart, 150);

    // Stop all animations after 5 seconds
    setTimeout(() => {
        clearInterval(floatInterval);
        clearInterval(pulseInterval);
        clearInterval(rotateInterval);
        clearInterval(bounceInterval);
        clearInterval(shakeInterval);
        button.disabled = false;
        button.textContent = 'Click for Cute Animation';
    }, 5000);
}

// Add event listener to the button
document.addEventListener('DOMContentLoaded', () => {
    const animationBtn = document.getElementById('animationBtn');
    if (animationBtn) {
        animationBtn.addEventListener('click', playCuteAnimation);
    }
}); 