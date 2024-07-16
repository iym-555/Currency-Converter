#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, // Base currency (1 USD = 0.91 EUR)
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    AED: 15.29,
    TRY: 228.90
};
let userans = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter From currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "AED", "TRY"]
    },
    {
        name: "to",
        type: "list",
        message: "Enter To currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "AED", "TRY"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount",
    }
]);
let fromAmount = currency[userans.from];
let toAmount = currency[userans.to];
let amount = userans.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(Math.round(convertedAmount));
