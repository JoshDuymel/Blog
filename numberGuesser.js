var secretNumber = 0,
	numberOfGuesses = 0;

function writeMessage(elementId, message, appendMessage) {
	var elemToUpdate = document.getElementById(elementId);
	if (appendMessage) {
		elemToUpdate.innerHTML = elemToUpdate.innerHTML + message;
	} else {
		elemToUpdate.innerHTML = message;
	}
};

function newGame() {
	secretNumber = Math.floor(Math.random() * 100) + 1;
	numberOfGuesses = 0;
	writeMessage('historyList', '');
  writeMessage('statusArea', '<p>Please enter a number 1-100 and press the Guess button.</p>');
}

function guessInRange(guess) {
	return (guess > 0 && guess < 101);
}

function userGuessed() {

	let gap = Math.abs(userGuessed - secretNumber);

	var userGuessed = document.getElementById('userGuess').value;
	if (userGuessed.length == 0 || ! guessInRange(userGuessed)) {

		writeMessage('statusArea', '<p>Please enter a number 1-100 and press the Guess button.</p>');
	} else if (userGuessed.indexOf('.') != -1) {
		writeMessage('statusArea', '<p>Please enter a whole number 1-100 and press the Guess button.</p>');
	} else {
		numberOfGuesses++;

    if (gap > 50) {
			writeMessage('statusArea', '<p>You\'re frozen! Your guess of ' + userGuessed + ' was more than 50 away! Try again...</p>');
			writeMessage('historyList', '<li>' + userGuessed +'...frozen</li>', true);
		}
    else if (gap > 40) {
			writeMessage('statusArea', '<p>You\'re freezing! Your guess of ' + userGuessed + ' was more than 40 away! Try again...</p>');
			writeMessage('historyList', '<li>' + userGuessed +'...freezing</li>', true);
		}
    else if (gap > 30) {
			writeMessage('statusArea', '<p>You\'re cold! Your guess of ' + userGuessed + ' was more than 30 away! Try again...</p>');
			writeMessage('historyList', '<li>' + userGuessed +'...cold</li>', true);
		}
    else if (gap > 20) {
			writeMessage('statusArea', '<p>You\'re chilly! Your guess of ' + userGuessed + ' was more than 20 away! Try again...</p>');
			writeMessage('historyList', '<li>' + userGuessed +' chilly!</li>', true);
		}
    else if (gap > 10) {
			writeMessage('statusArea', '<p>You\'re warm! Your guess of ' + userGuessed + ' was more than 10 away! Try again...</p>');
			writeMessage('historyList', '<li>' + userGuessed +' warm...</li>', true);
		}
    else if (gap > 5) {
			writeMessage('statusArea', '<p>You\'re hot! ;) Your guess of ' + userGuessed + ' was more than 5 away! Try again...</p>');
			writeMessage('historyList', '<li>' + userGuessed +' hot!</li>', true);
		}
    else if (gap > 2) {
			writeMessage('statusArea', '<p>You\'re roastin\'! ;D Your guess of ' + userGuessed + ' was more than 2 away! Try again...</p>');
			writeMessage('historyList', '<li>' + userGuessed +' you\'re roastin\'!</li>', true);
		}
    else if (gap => 1) {
			writeMessage('statusArea', '<p>You\'re on fire! :O Your guess of ' + userGuessed + ' was more than 1 away! Try again...</p>');
			writeMessage('historyList', '<li>' + userGuessed +' wew, you\'re on fire!</li>', true);
		}
    else if (userGuessed == secretNumber) {
			writeMessage('statusArea', '<p>You got me in ' + numberOfGuesses +' guesses! It was ' + secretNumber + '! Let\'s try again!</p>');
      	writeMessage('historyList', '<li>Ah damn! Ya\' got me :D</li>', true);
		}
	}

	document.getElementById('userGuess').value = '';
}

window.onload = function() {
	newGame();
	document.getElementById('buttonArea').addEventListener('click', userGuessed);
};
