var rl = require('readline');
var scanner = require('./scanner/scanner');
var receipt = require('./printer/receipt-printer');
var priceCalculator = require('./price-calculator/price-calculator');

var readLine = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.on('line', handleUserInput);


function handleUserInput(input) {
    var inputtedMessage = input.trim().toLowerCase();
    switch (inputtedMessage) {
        case '':
            //Ignore "blank" scans, when the user just hits enter.
            break;
        case 'checkout':
            var scannedItems = scanner.getAllItems();
            var calculatedCost = priceCalculator.calculateCostOfItems(scannedItems);
            receipt.printReceipt(calculatedCost);
            scanner.resetScanner();
            printWelcomeMessage();
            break;
        case 'exit':
            console.log("Goodbye.");
            readLine.close();
            process.exit();
        default:
            scanner.scanItem(inputtedMessage);
            break;
    }
    readLine.prompt();

}

function printWelcomeMessage() {
    console.log("\n\n" +
        "   Welcome, to begin checking out items please type the item name.\n\n" +
        "   Enter \"checkout\" when all the items have been scanned, or 'exit' to exit application.\n");
}

function runApp() {
    printWelcomeMessage();
    readLine.setPrompt("Enter Item> ");
    readLine.prompt();
}

runApp();
