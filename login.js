function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const correctPassword = "mahiejustsoprettyinit";
    const errorMessage = document.getElementById('errorMessage');

    if (password === correctPassword) {
        localStorage.setItem('isMusicPlaying', 'true');
        localStorage.setItem('musicTime', '0');
        window.location.href = 'home.html';
    } else {
        errorMessage.textContent = "That's not right, beautiful. Try again! 💕";
        document.getElementById('passwordInput').value = '';
    }
}

// Allow Enter key to submit
document.getElementById('passwordInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
});