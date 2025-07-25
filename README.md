
# 🤔Guess-It

This is a classic "Guess the Number" game built with Node.js. It runs entirely in your command-line interface (CLI) and uses asynchronous prompts to create a smooth, interactive experience. The player must guess a secret number between 1 and 100 within a limited number of chances based on the chosen difficulty level.  

It's Solution to challenge on [Roadmap.sh](https://roadmap.sh/projects/number-guessing-game)

---


# ✨Features

- __Interactive Command-Line Interface:__ Clean and easy-to-use CLI prompts.
- __Multiple Difficulty Levels:__ Choose from Easy (10 chances), Medium (5 chances), or Hard (3 chances).
- __Smart Feedback:__ The game tells you if your guess is too high or too low.
- __Modern JavaScript:__ Built with async/await for clean, asynchronous code.


# 📋Prerequisites

To run this game, you will need:

- [Node.js](https://nodejs.org) (version 14.x or later recommended).
# 🎮How To Play

1. __Save the Code:__ Save the provided JavaScript code into a file named game.js.
2. __Open Your Terminal:__ Open a terminal or command prompt.
3. __Navigate to the File:__ Use the `cd` command to navigate to the directory where you saved `game.js.`

```bash
cd path/to/your/folder
```
4. __Run the Game:__ Execute the script using Node.js.

```bash
node game.js
```
5. __Follow the Prompts:__

- First, you will be asked to select a difficulty level (1, 2, or 3).
- Next, start guessing the number.
- After each guess, the game will provide feedback.
- Once the game is over (you either win or run out of chances), you'll be asked if you want to play again.
# 🧑🏻‍💻Gameplay Demo

```text
$ node game.js
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100
Please select the difficulty level:
1. Easy (10 Chances)
2. Medium (5 Chances)
3. Hard (3 Chances)
Enter your difficulty level(1/2/3): 2


Great!! You have selected the Medium difficulty level.


Let's start the game!

Guess a number(1-100): 50
Incorrect! The number is greater than 50.
Chances left: 4

Guess a number(1-100): 75
Incorrect! The number is less than 75.
Chances left: 3

Guess a number(1-100): 62
Incorrect! The number is greater than 62.
Chances left: 2

Guess a number(1-100): 68
Congratulations! You guessed the correct number in 3 attempts.

Do you want to play again? (Yes/No): no

👋 Thanks for playing! Goodbye.
```
# 💻Code Overview

The script is structured into a few key functions to handle the game logic and user interaction:

- `ask(question):` A helper function that wraps Node.js's native readline module in a Promise. This is what allows the program to use async/await to wait for user input without blocking the entire application.

- `guessIt():` This is the core function for a single round of the game. It handles:

    - Setting the difficulty and number of chances.
    - Generating the secret number.
    - The main while loop for guessing.
    - Providing feedback to the player.

- `main():` This function acts as the main game loop controller. It repeatedly calls guessIt() as long as the player wants to play again, providing a seamless replay experience.

# ✒️Authors

- Made with ❤️ by [@codeprnv](https://github.com/codeprnv)
