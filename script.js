const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const hintPara = document.getElementById('hint');

let secretNumber = Math.floor(Math.random(60) * 50) + 1;

guessBtn.addEventListener('click', () => {
	const guess = Number(guessInput.value);
	if (guess) {
		if (guess === secretNumber) {
			hintPara.textContent = 'Correct!';
		} else if (guess > secretNumber) {
			hintPara.textContent = 'Too high!';
		} else {
			hintPara.textContent = 'Too low!';
		}
		guessInput.value = '';
	}
});
