window.onload = function() {
    const music = document.getElementById('bgMusic');
    const button = document.getElementById('musicToggle');
    
    // Check if user just logged in
    if (sessionStorage.getItem('justLoggedIn') === 'true') {
        music.play();
        button.classList.add('playing');
        sessionStorage.removeItem('justLoggedIn');
    }
};

function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const button = document.getElementById('musicToggle');
    
    if (music.paused) {
        music.play();
        button.classList.add('playing');
    } else {
        music.pause();
        button.classList.remove('playing');
    }
}