window.onload = function() {
    const music = document.getElementById('bgMusic');
    const button = document.getElementById('musicToggle');
    
    // Preload the audio
    music.preload = 'auto';
    music.load();
    music.loop = true;

    const isMusicPlaying = localStorage.getItem('isMusicPlaying') === 'true';
    const savedTime = parseFloat(localStorage.getItem('musicTime')) || 0;
    
    if (isMusicPlaying) {
        // Reduce delay by setting a small timeout
        setTimeout(() => {
            music.currentTime = savedTime;
            const playPromise = music.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    button.classList.add('playing');
                }).catch(error => {
                    console.log("Autoplay prevented:", error);
                });
            }
            button.classList.add('playing');
        }, 50);
    }

    // More frequent updates
    setInterval(() => {
        if (!music.paused) {
            localStorage.setItem('musicTime', music.currentTime.toString());
        }
    }, 50);

    window.addEventListener('beforeunload', () => {
        if (!music.paused) {
            localStorage.setItem('musicTime', music.currentTime.toString());
        }
    });
};

function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const button = document.getElementById('musicToggle');
    
    if (music.paused) {
        music.play();
        button.classList.add('playing');
        localStorage.setItem('isMusicPlaying', 'true');
    } else {
        music.pause();
        button.classList.remove('playing');
        localStorage.setItem('isMusicPlaying', 'false');
    }
}