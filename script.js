let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;
let running = false;

function updateDisplay() {
  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');
  document.getElementById('time').innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function startStopwatch() {
  if (!running) {
    timer = setInterval(stopwatch, 1000);
    running = true;
  }
}

function pauseStopwatch() {
  clearInterval(timer);
  running = false;
}

function resetStopwatch() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById('laps').innerHTML = '';
  running = false;
}

function recordLap() {
  if (running) {
    const lapTime = document.createElement('li');
    lapTime.innerText = document.getElementById('time').innerText;
    document.getElementById('laps').appendChild(lapTime);
  }
}

updateDisplay(); // Initialize display
