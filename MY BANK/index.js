"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import 'prompt' from a library or define it
var readline = require("readline");
var Account = /** @class */ (function () {
    function Account(initialBalance) {
        this.balance = initialBalance;
    }
    Account.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("Deposited: $".concat(amount));
        }
        else {
            console.log('Invalid deposit amount');
        }
    };
    Account.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn: $".concat(amount));
        }
        else {
            console.log('Invalid withdrawal amount or insufficient funds');
        }
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    return Account;
}());
var MyBank = /** @class */ (function () {
    function MyBank() {
        this.accounts = {};
    }
    MyBank.prototype.createAccount = function (accountNumber, initialBalance) {
        if (accountNumber in this.accounts) {
            console.log('Account already exists');
        }
        else {
            var account = new Account(initialBalance);
            this.accounts[accountNumber] = account;
            console.log('Account created successfully');
        }
    };
    MyBank.prototype.getAccount = function (accountNumber) {
        return this.accounts[accountNumber];
    };
    return MyBank;
}());
var myBank = new MyBank();
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function showMenu() {
    console.log('MyBank Console App');
    console.log('1. Create Account');
    console.log('2. Deposit');
    console.log('3. Withdraw');
    console.log('4. Check Balance');
    console.log('5. Exit');
}
function processChoice() {
    rl.question('Enter your choice: ', function (choice) {
        switch (choice) {
            case '1':
                rl.question('Enter account number: ', function (accountNumber) {
                    rl.question('Enter initial balance:', function (balance) {
                        var initialBalance = parseFloat(balance);
                        myBank.createAccount(accountNumber, initialBalance);
                        showMenu();
                        processChoice();
                    });
                });
                break;
            case '2':
                rl.question('Enter account number: ', function (depositAccountNumber) {
                    rl.question('Enter deposit amount:', function (depositAmount) {
                        var amount = parseFloat(depositAmount);
                        var accountToDeposit = myBank.getAccount(depositAccountNumber);
                        if (accountToDeposit) {
                            accountToDeposit.deposit(amount);
                        }
                        else {
                            console.log('Account not found');
                        }
                        showMenu();
                        processChoice();
                    });
                });
                break;
            case '3':
                rl.question('Enter account number: ', function (withdrawAccountNumber) {
                    rl.question('Enter withdrawal amount:', function (withdrawAmount) {
                        var amount = parseFloat(withdrawAmount);
                        var accountToWithdraw = myBank.getAccount(withdrawAccountNumber);
                        if (accountToWithdraw) {
                            accountToWithdraw.withdraw(amount);
                        }
                        else {
                            console.log('Account not found');
                        }
                        showMenu();
                        processChoice();
                    });
                });
                break;
            case '4':
                rl.question('Enter account number: ', function (balanceAccountNumber) {
                    var accountToCheckBalance = myBank.getAccount(balanceAccountNumber);
                    if (accountToCheckBalance) {
                        console.log("Balance: $".concat(accountToCheckBalance.getBalance()));
                    }
                    else {
                        console.log('Account not found');
                    }
                    showMenu();
                    processChoice();
                });
                break;
            case '5':
                console.log('Goodbye!');
                rl.close();
                break;
            default:
                console.log('Invalid choice');
                showMenu();
                processChoice();
        }
    });
}
showMenu();
processChoice();
