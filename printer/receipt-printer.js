var accounting = require('accounting');

/*
 costOfItemsArr eg.
 [
    {
        name: 'apple', numberOfItems: 1, price: 0.5
    }
 ]
 */
exports.printReceipt = function (costOfItemsArr) {
    var total = 0;
    console.log("\n");
    costOfItemsArr.forEach(function (calculatedCostObj) {
        total += calculatedCostObj.price;
        console.log("\t" + calculatedCostObj.numberOfItems + " x " + capitilize(calculatedCostObj.name) + "\t" + accounting.formatMoney(calculatedCostObj.price));
    });
    console.log("\n" +
        "\tTOTAL Cost\t"+accounting.formatMoney(total));
};

function capitilize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
