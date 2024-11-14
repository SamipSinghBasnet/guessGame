const minNum = 0;
const maxNum = 150;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let running = true;

document.getElementById('min-num').textContent = minNum;
document.getElementById('max-num').textContent = maxNum;

document.getElementById('guess-btn').addEventListener('click', function() {
    if (!running) return;

    const guessInput = document.getElementById('guess-input');
    const message = document.getElementById('message');
    let guess = Number(guessInput.value);

    if (isNaN(guess)) {
        message.textContent = "Please enter a valid number.";
    } else if (guess < minNum || guess > maxNum) {
        message.textContent = "Please enter a number in range.";
    } else {
        attempts++;
        if (guess < answer) {
            message.textContent = "Too low!";
        } else if (guess > answer) {
            message.textContent = "Too high!";
        } else {
            message.textContent = `Correct! The answer was ${answer}. It took you ${attempts} attempts.`;
            running = false;
        }
    }
});
