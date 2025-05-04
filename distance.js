document.addEventListener('DOMContentLoaded', () => {
    // Initialize strength meter
    const strengthFill = document.getElementById('strengthFill');
    const daysTogether = document.getElementById('daysTogether');
    const distance = document.getElementById('distance');
    const timeDiff = document.getElementById('timeDiff');

    // Function to calculate days since May 5, 2023
    function updateDaysTogether() {
        const startDate = new Date('2023-05-05');
        const today = new Date();
        // Set both dates to midnight to avoid timezone issues
        startDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);
        const days = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
        daysTogether.textContent = days;
        strengthFill.style.width = '100%';
    }

    // Update immediately and then every minute
    updateDaysTogether();
    setInterval(updateDaysTogether, 60000);

    // Create floating hearts
    createFloatingHearts();

    // Handle message forms
    const egyptForm = document.getElementById('egyptForm');
    const serbiaForm = document.getElementById('serbiaForm');
    const egyptMessages = document.getElementById('egyptMessages');
    const serbiaMessages = document.getElementById('serbiaMessages');

    egyptForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = egyptForm.querySelector('input');
        addMessage(egyptMessages, input.value, 'egypt');
        input.value = '';
    });

    serbiaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = serbiaForm.querySelector('input');
        addMessage(serbiaMessages, input.value, 'serbia');
        input.value = '';
    });

    // Handle timeline
    const timelineContainer = document.querySelector('.timeline-container');
    const addMemoryBtn = document.getElementById('addMemoryBtn');

    addMemoryBtn.addEventListener('click', () => {
        const date = prompt('Enter the date (e.g., "First Video Call"):');
        if (!date) return;

        const title = prompt('Enter the title:');
        if (!title) return;

        const description = prompt('Enter the description:');
        if (!description) return;

        addTimelineItem(date, title, description);
    });

    // Handle vision board
    const visionForm = document.getElementById('visionForm');
    const visionContainer = document.querySelector('.vision-container');

    visionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = visionForm.querySelector('input');
        addVisionItem(input.value);
        input.value = '';
    });

    // Add initial messages
    addInitialMessages();
});

function createFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts');
    const colors = ['#D4AF37', '#C6363C', '#1034A6', '#0C4076'];

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

        heartsContainer.appendChild(heart);

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

function addMessage(container, text, country) {
    const message = document.createElement('div');
    message.className = 'message';
    message.innerHTML = `
        <div class="message-content">
            <p>${text}</p>
            <span class="message-time">${new Date().toLocaleTimeString()}</span>
        </div>
    `;
    message.style.animation = 'fadeIn 0.5s ease-out';
    container.appendChild(message);
    container.scrollTop = container.scrollHeight;
}

function addTimelineItem(date, title, description) {
    const timelineContainer = document.querySelector('.timeline-container');
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
        <div class="date">${date}</div>
        <div class="content">
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
    `;
    item.style.animation = 'fadeIn 0.5s ease-out';
    timelineContainer.insertBefore(item, document.getElementById('addMemoryBtn'));
}

function addVisionItem(text) {
    const visionContainer = document.querySelector('.vision-container');
    const item = document.createElement('div');
    item.className = 'vision-item';
    item.innerHTML = `
        <h3>${text}</h3>
        <p>Our shared dream</p>
    `;
    item.style.animation = 'fadeIn 0.5s ease-out';
    visionContainer.appendChild(item);
}

function addInitialMessages() {
    const egyptMessages = [
        "Your beautiful smile",
        "Our late-night conversations",
        "Your warm hugs",
        "The way you say my name"
    ];

    const serbiaMessages = [
        "Your kind heart",
        "Our shared laughter",
        "Your beautiful eyes",
        "The way you understand me"
    ];

    const egyptContainer = document.getElementById('egyptMessages');
    const serbiaContainer = document.getElementById('serbiaMessages');

    egyptMessages.forEach(msg => addMessage(egyptContainer, msg, 'egypt'));
    serbiaMessages.forEach(msg => addMessage(serbiaContainer, msg, 'serbia'));
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .message {
        margin-bottom: 1rem;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .message-content {
        position: relative;
    }

    .message-time {
        font-size: 0.8rem;
        color: #666;
        position: absolute;
        right: 0;
        bottom: -20px;
    }

    .vision-item {
        transition: transform 0.3s ease;
    }

    .vision-item:hover {
        transform: scale(1.05);
    }
`;
document.head.appendChild(style); 