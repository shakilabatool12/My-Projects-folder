import inquirer from "inquirer";
import chalk from "chalk";

class Player {
    name: string;
    fuel: number;

    constructor(name: string) {
        this.name = name;
        this.fuel = 100;
    }

    fuelDecrease() {
        this.fuel -= 25;
        if (this.fuel < 0) {
            this.fuel = 0;
        }
    }

    fuelIncrease() {
        this.fuel = 100;
    }
}

class Opponent {
    name: string;
    fuel: number;

    constructor(name: string) {
        this.name = name;
        this.fuel = 100;
    }

    fuelDecrease() {
        this.fuel -= 25;
        if (this.fuel < 0) {
            this.fuel = 0;
        }
    }
}

async function startGame() {
    const player = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "Please Enter Your Name:"
    });

    const opponent = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "Please Select Your Opponent:",
        choices: ["Skeleton", "Zombie"]
    });

    const p1 = new Player(player.name);
    const o1 = new Opponent(opponent.select);

    while (p1.fuel > 0 && o1.fuel > 0) {
        let ask = await inquirer.prompt({
            type: "list",
            message: "Select the option",
            name: "option",
            choices: ["Attack", "Drink Portion", "Run For Your Life..."],
        });

        if (ask.option === "Attack") {
            const num = Math.floor(Math.random() * 2);

            if (num === 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
            } else {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            }

            if (o1.fuel <= 0) {
                console.log(chalk.bold.green.italic("You Win"));
                break;
            } else if (p1.fuel <= 0) {
                console.log(chalk.bold.red.italic("You Loose, Better Luck Next Time"));
                break;
            }
        } else if (ask.option === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Portion. Your Fuel is ${p1.fuel}`));
        } else if (ask.option === "Run For Your Life...") {
            console.log(chalk.bold.red.italic("You Ran Away, Better Luck Next Time"));
            break;
        }
    }
}

startGame();
