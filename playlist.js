document.addEventListener('DOMContentLoaded', () => {
    // Handle form submission
    const songForm = document.getElementById('songForm');
    const playlist = document.querySelector('.playlist');

    songForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const title = songForm.querySelector('input[type="text"]').value;
        const artist = songForm.querySelector('input[type="text"]:nth-child(2)').value;
        const message = songForm.querySelector('textarea').value;

        // Create new song element
        const newSong = document.createElement('div');
        newSong.className = 'song';
        newSong.innerHTML = `
            <div class="song-info">
                <h3>${title}</h3>
                <p>${artist}</p>
            </div>
            <div class="song-message">
                <p>${message}</p>
            </div>
        `;

        // Add new song to playlist
        playlist.appendChild(newSong);

        // Reset form
        songForm.reset();
    });

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
}); 