
//timer js
let timer;
let timeLeft;

function startTimer() {
    const timeInput = document.getElementById('timeInput').value;
    timeLeft = parseInt(timeInput, 10);

    if (isNaN(timeLeft) || timeLeft <= 0) {
        alert('Please enter a valid number of seconds.');
        return;
    }

    document.getElementById('timerDisplay').textContent = formatTime(timeLeft);

    clearInterval(timer); // Clear any existing timers
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById('timerDisplay').textContent = 'Time\'s up!';
        return;
    }

    timeLeft--;
    document.getElementById('timerDisplay').textContent = formatTime(timeLeft);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
