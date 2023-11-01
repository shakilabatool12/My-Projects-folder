import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "kindly enter your first number:"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "kindly enter your second number:"
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "/", "*"],
        message: "select operator:"
    },
]);
let { numberOne, numberTwo, operator } = answers;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    if (operator === "/") {
        result = numberOne / numberTwo;
    }
    if (operator === "*") {
        result = numberOne * numberTwo;
    }
    console.log("your result is:", result);
}
else {
    console.log("kindly enter valid input");
}
