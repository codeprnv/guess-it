import readline from "readline";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// Create a wrapper function to use readline with async/await

function ask(question) {
	return new Promise((resolve) => rl.question(question, resolve));
}

// Function to perform guessing logic
async function guessIt() {
	console.log("Welcome to the Number Guessing Game!");
	console.log("I'm thinking of a number between 1 and 100");
	console.log(
		"Please select the difficulty level:\n1. Easy (10 Chances)\n2. Medium (5 Chances)\n3. Hard (3 Chances)"
	);
	try {
		const diff_level = await ask(`Enter your difficulty level(1/2/3): `);
		const level = Number(diff_level.trim());
		const diff_level_mappings = {
			1: { name: "Easy", chances: 10 },
			2: { name: "Medium", chances: 5 },
			3: { name: "Hard", chances: 3 },
		};

		if (![1, 2, 3].includes(level)) {
			console.log(
				`\nPlease select the difficulty level between 1 and 3 only!!`
			);
			rl.close();
			return;
		}

		const { name, chances } = diff_level_mappings[level];

		console.log(`\n\nGreat!! You have selected the ${name} difficulty level.`);
		console.log("\n\nLet's start the game!");

		const secretNumber = Math.floor(Math.random() * 100) + 1;
		let remaining = chances;
		let attempts = 0;

		while (remaining > 0) {
			const userInput = await ask("\nGuess a number(1-100): ");
			const guess = Number(userInput.trim());

			if (isNaN(guess) || guess < 1 || guess > 100) {
				console.log("Invalid input! Enter a number between 1 and 100");
				continue;
			}

			if (guess === secretNumber) {
				console.log(
					`Congratulations! You guessed the correct number in ${attempts} attempts.`
				);
				// rl.close();
				return;
			} else if (secretNumber < guess) {
				attempts++;
				console.log(`Incorrect! The number is less than ${guess}.`);
			} else {
				attempts++;
				console.log(`Incorrect! The number is greater than ${guess}.
                    `);
			}
			remaining--;
			if (remaining > 0) {
				console.log(`Chances left: ${remaining}`);
			}
		}
		console.log(`You've run out chances! The number was: ${secretNumber}`);
		// rl.close();
	} catch (error) {
		console.error(`Error: ${error}`);
		rl.close();
	}
}

// Main loop to support replay
async function main() {
	let playAgain = true;

	while (playAgain) {
		await guessIt();

		const again = await ask("\nDo you want to play again? (Yes/No): ");
		const answer = again.trim().toLowerCase();

		if (answer === "yes") {
			playAgain = true;
		} else if (answer === "no") {
			console.log("\n👋 Thanks for playing! Goodbye.");
			playAgain = false;
		} else {
			console.log("❌ Invalid input! Ending the game.");
			playAgain = false;
		}
	}

	rl.close();
}

// Run then game
main()