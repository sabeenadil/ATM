#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin.",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "What do you want to do?",
            type: "list",
            choices: ["Cash Withdraw", "Check Balance"],
        },
    ]);
    if (operationAns.operation === "Cash Withdraw") {
        let withdrawAns = await inquirer.prompt([{
                name: "withdrawOption",
                type: "list",
                message: "Select a withdrawl Method.",
                choices: ["Fast Cash", "Enter Amount"]
            }]);
        if (withdrawAns.withdrawOption === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([{
                    name: "fastCash",
                    type: "list",
                    message: "Select Amount",
                    choices: [1000, 2000, 3000, 5000]
                }]);
            if (fastCashAns.fastCash > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash} withdrawl successfully.`);
                console.log(`Your remaining amount is: ${myBalance} `);
            }
        }
        else if (withdrawAns.withdrawOption === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter Your Amount:.",
                },
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Sorry!! You have insufficient balance.");
            }
            else if (amountAns.amount < myBalance) {
                myBalance -= amountAns.amount;
                console.log(`Your remaining balance is: ${myBalance}.`);
            }
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your balance is: ${myBalance}.`);
    }
}
else {
    console.log("Incorrect pin number.");
}
;
