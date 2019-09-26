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
  document.getElementById('resetButton');
	secretNumber = Math.floor(Math.random() * 100) + 1;
	numberOfGuesses = 0;
	writeMessage('historyList', '');
  writeMessage('statusArea', '<h2>Please enter a number 1-100 and press the Guess button.</h2>');
}

function guessInRange(guess) {
	return (guess > 0 && guess < 101);
}

function userGuessed() {
	var userGuessed = document.getElementById('userGuess').value;
	var statusArea = document.getElementById('statusArea');
	var historyList = document.getElementById('historyList');
	if (userGuessed.length == 0 || ! guessInRange(userGuessed)) {

		writeMessage('statusArea', '<h2>Please enter a number 1-100 and press the Guess button.</h2>');
	} else if (userGuessed.indexOf('.') != -1) {
		writeMessage('statusArea', '<h2>Please enter a whole number 1-100 and press the Guess button.</h2>');
	} else {
		numberOfGuesses++;

    if ((userGuessed < (secretNumber-50)) || (userGuessed > (secretNumber+50))) {
			writeMessage('statusArea', '<h2>You\'re frozen! Your guess of ' + userGuessed + ' was 50 away! Try again...</h2>');
			writeMessage('historyList', '<li>' + userGuessed +' (frozen,that was guess number ' + numberOfGuesses +')</li>', true);
		}
    else if ((userGuessed < (secretNumber-40)) || (userGuessed > (secretNumber+40))) {
			writeMessage('statusArea', '<h2>You\'re freezing! Your guess of ' + userGuessed + ' was 40 away! Try again...</h2>');
			writeMessage('historyList', '<li>' + userGuessed +' (Freezing! That was guess number ' + numberOfGuesses +')</li>', true);
		}
    else if ((userGuessed < (secretNumber-30)) || (userGuessed > (secretNumber+30))) {
			writeMessage('statusArea', '<h2>You\'re cold! Your guess of ' + userGuessed + ' was 30 away! Try again...</h2>');
			writeMessage('historyList', '<li>' + userGuessed +' (Cold! That was guess number ' + numberOfGuesses +')</li>', true);
		}
    else if ((userGuessed < (secretNumber-20)) || (userGuessed > (secretNumber+20))) {
			writeMessage('statusArea', '<h2>You\'re chilly! Your guess of ' + userGuessed + ' was 20 away! Try again...</h2>');
			writeMessage('historyList', '<li>' + userGuessed +' (Chilly, that was guess number ' + numberOfGuesses +')</li>', true);
		}
    else if ((userGuessed < (secretNumber-10)) || (userGuessed > (secretNumber+10))) {
			writeMessage('statusArea', '<h2>You\'re warm! Your guess of ' + userGuessed + ' was 10 away! Try again...</h2>');
			writeMessage('historyList', '<li>' + userGuessed +' (Warm...that was guess number ' + numberOfGuesses +')</li>', true);
		}
    else if ((userGuessed < (secretNumber-5)) || (userGuessed > (secretNumber+5))) {
			writeMessage('statusArea', '<h2>You\'re hot! ;) Your guess of ' + userGuessed + ' was 5 away! Try again...</h2>');
			writeMessage('historyList', '<li>' + userGuessed +' (Hot! That was guess number ' + numberOfGuesses +')</li>', true);
		}
    else if ((userGuessed < (secretNumber-2)) || (userGuessed > (secretNumber+2))) {
			writeMessage('statusArea', '<h2>You\'re roastin\'! ;D Your guess of ' + userGuessed + ' was 2 away! Try again...</h2>');
			writeMessage('historyList', '<li>' + userGuessed +' (Roastin! That was guess number ' + numberOfGuesses +')</li>', true);
		}
    else if ((userGuessed <= (secretNumber-1)) || (userGuessed >= (secretNumber+1))) {
			writeMessage('statusArea', '<h2>You\'re on fire! :O Your guess of ' + userGuessed + ' was 1 away! Try again...</h2>');
			writeMessage('historyList', '<li>' + userGuessed +' (Burning! That was guess number ' + numberOfGuesses +')</li>', true);
		}
    else if (userGuessed == secretNumber) {
			writeMessage('statusArea', '<h2>You got me in ' + numberOfGuesses +' guesses! It was ' + secretNumber + '! Let\'s try again!</h2>');
      	writeMessage('historyList', '<li>Ah damn! Ya\' got me :D</li>', true);
		}
	}

	document.getElementById('userGuess').value = '';
}

window.onload = function() {
	newGame();
	document.getElementById('buttonArea').addEventListener('click', userGuessed);
};
