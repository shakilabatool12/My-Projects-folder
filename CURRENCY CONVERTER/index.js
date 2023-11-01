"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var convertion = {
    "PKR": {
        "USD": 0.0034,
        "GBP": 0.0027,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.24,
        "PKR": 367.89,
        "GBP": 1
    },
    "USD": {
        "PKR": 297.03,
        "GBP": 0.81,
        "USD": 1
    }
};
var answer = await inquirer_1.default.prompt([
    {
        type: "list",
        name: "From",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Your Currency:"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Your Convertion Currency:"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your convertion amount:"
    },
]);
var from = answer.from, to = answer.to, amount = answer.amount;
if (from && to && amount) {
    var result = (convertion[from][to] * amount);
    console.log("Your convertion from ".concat(from, " to ").concat(to, " is ").concat(result));
}
else {
    console.log("Invalid input");
}
