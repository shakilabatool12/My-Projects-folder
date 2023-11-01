#! /usr/bin/env node
// Import 'prompt' from a library or define it
import * as readline from 'readline';

class Account {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: $${amount}`);
    } else {
      console.log('Invalid deposit amount');
    }
  }

  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn: $${amount}`);
    } else {
      console.log('Invalid withdrawal amount or insufficient funds');
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

class MyBank {
  private accounts: { [accountNumber: string]: Account } = {};

  createAccount(accountNumber: string, initialBalance: number): void {
    if (accountNumber in this.accounts) {
      console.log('Account already exists');
    } else {
      const account = new Account(initialBalance);
      this.accounts[accountNumber] = account;
      console.log('Account created successfully');
    }
  }

  getAccount(accountNumber: string): Account | undefined {
    return this.accounts[accountNumber];
  }
}

const myBank = new MyBank();

const rl = readline.createInterface({
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
  rl.question('Enter your choice: ', (choice) => {
    switch (choice) {
      case '1':
        rl.question('Enter account number: ', (accountNumber) => {
          rl.question('Enter initial balance:', (balance) => {
            const initialBalance = parseFloat(balance);
            myBank.createAccount(accountNumber, initialBalance);
            showMenu();
            processChoice();
          });
        });
        break;
      case '2':
        rl.question('Enter account number: ', (depositAccountNumber) => {
          rl.question('Enter deposit amount:', (depositAmount) => {
            const amount = parseFloat(depositAmount);
            const accountToDeposit = myBank.getAccount(depositAccountNumber);
            if (accountToDeposit) {
              accountToDeposit.deposit(amount);
            } else {
              console.log('Account not found');
            }
            showMenu();
            processChoice();
          });
        });
        break;
      case '3':
        rl.question('Enter account number: ', (withdrawAccountNumber) => {
          rl.question('Enter withdrawal amount:', (withdrawAmount) => {
            const amount = parseFloat(withdrawAmount);
            const accountToWithdraw = myBank.getAccount(withdrawAccountNumber);
            if (accountToWithdraw) {
              accountToWithdraw.withdraw(amount);
            } else {
              console.log('Account not found');
            }
            showMenu();
            processChoice();
          });
        });
        break;
      case '4':
        rl.question('Enter account number: ', (balanceAccountNumber) => {
          const accountToCheckBalance = myBank.getAccount(balanceAccountNumber);
          if (accountToCheckBalance) {
            console.log(`Balance: $${accountToCheckBalance.getBalance()}`);
          } else {
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
