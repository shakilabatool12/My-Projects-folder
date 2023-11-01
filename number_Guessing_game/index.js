#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function welcome() {
    let yellowBright = chalk.yellow('lets start number guessing game');
}
await welcome();
const systemGenerateNo = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userguess",
        message: "write your guess between 1 to 10"
    }
]);
const { userGuess } = answers;
if (userGuess === systemGenerateNo) {
    console.log(userGuess, "userGuess", systemGenerateNo, `SYs`);
    console.log(chalk.yellow("congratulation your answer is correct"));
}
else {
    console.log(chalk.yellow("please try again, better luck next time :)"));
}
