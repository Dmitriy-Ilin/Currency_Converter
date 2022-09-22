const input = require('sync-input');
let from;
let to;
let amount;
let result;

let currency = {
    USD: 1,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75,
}


console.log(`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`)
function welcome() {
    console.log(`What do you want to do?`);
    let whatToDo = input(`1-Convert currencies 2-Exit program
`);
    switch (whatToDo) {
        case "1":
            console.log(CurrencyConverter());
            welcome();
            break;
        case "2":
            exit();
            break;
        default:
            console.log("Unknown input");
            welcome();

    }
}
welcome();



function CurrencyConverter() {
    console.log("What do you want to convert?");
    from = input('From: ').toUpperCase();
    if (currency[from] === undefined) {
        console.log("Unknown currency");
        return CurrencyConverter();
    }
    to = input('To: ').toUpperCase();
    if (currency[to] === undefined) {
        console.log("Unknown currency");
        return CurrencyConverter();
    }
    amount = input('Amount: ');
    result = currency[to] * Number(amount) / currency[from]
    if (amount < 0) {
        return "The amount can not be less than 1"}
    else if (isNaN(result)) {
        return "The amount has to be a number"}
    else {
        return `Result: ${amount} ${from} equals ${result.toFixed(4)} ${to}`;
    }
}



function exit() {
    return console.log("Have a nice day!");

}