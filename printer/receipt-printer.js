var accounting = require('accounting');

/*
 costOfItemsArr eg.
 [
    { totalCost: 1,
      specialLineItems: [ {
                             numberOfItems: 2,
                             price: 2
                          } ],
      name: 'apple' }
 ]
 */
exports.printReceipt = function (costOfItemsArr) {
    var total = 0;
    console.log("\n");
    costOfItemsArr.forEach(function (calculatedCostObj) {
        total += calculatedCostObj.totalCost;
        calculatedCostObj.specialLineItems.forEach(function(lineItem) {
            console.log("\t" + lineItem.numberOfItems + " x " + capitilize(calculatedCostObj.name) + "\t" + accounting.formatMoney(lineItem.price));
        });
    });
    console.log("\n" +
        "\tTOTAL Cost\t"+accounting.formatMoney(total));
};

function capitilize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
