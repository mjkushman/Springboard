// Bank Account
// Write a function called createAccount which creates a bank account given a PIN number and an initial deposit amount. The return value should be an object with four methods on it:
// checkBalance: Given the correct PIN, return the current balance. (If the PIN is invalid, return “Invalid PIN.”)
// deposit: Given the correct PIN and a deposit amount, increment the account balance by the amount. (If the PIN is invalid, return “Invalid PIN.”)
// withdraw: Given the correct PIN and a withdrawal amount, decrement the account balance by the amount. You also shouldn’t be able to withdraw more than you have. (If the PIN is invalid, return “Invalid PIN.”)
// changePin: Given the old PIN and a new PIN, change the PIN number to the new PIN. (If the old PIN is invalid, return “Invalid PIN.”)
// let account = createAccount("1234", 100);

// account.checkBalance("oops");
// // "Invalid PIN."

// account.deposit("1234", 250);
// // "Succesfully deposited $250. Current balance: $350."

// account.withdraw("1234" 300);
// // "Succesfully withdrew $300. Current balance: $50."

// account.withdraw("1234" 10);
// // "Withdrawal amount exceeds account balance. Transaction cancelled."

// account.changePin("1234", "5678");
// // "PIN successfully changed!"

function createAccount(pin, amount = 0) {
  let accountPin = pin;
  let accountBalance = amount;

  return {
    checkBalance(pinInput) {
      if (pinInput === accountPin) return `$${accountBalance}`;
      else return `Invalid PIN.`;
    },
    deposit(pinInput, depositAmount = 0) {
      depositAmount = Number(depositAmount);
      if (pinInput === accountPin) {
        accountBalance += depositAmount;
        return `Succesfully deposited $${depositAmount}. Current balance: $${accountBalance}.`;
      } else return `Invalid PIN.`;
    },
    withdraw(pinInput, withdrawAmount = 0) {
      withdrawAmount = Number(withdrawAmount);
      if (pinInput === accountPin) {
        if (withdrawAmount <= accountBalance) {
          accountBalance -= withdrawAmount;
          return `Succesfully withdrew $${withdrawAmount}. Current balance: $${accountBalance}.`;
        } else
          return `Withdrawal amount exceeds account balance. Transaction cancelled.`;
      } else return `Invalid PIN.`;
    },
    changePin(pinInput, newPin) {
      if (pinInput === accountPin) {
        accountPin = newPin;
        return `PIN successfully changed!`;
      } else return `Invalid PIN.`;
    },
  };
}

module.exports = { createAccount };
