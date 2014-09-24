/*
 specialsObj eg.
                {
                    "numOfItemsForSpecial": 2,
                    "price": 0.50
                }
 */
exports.calculateCostWithSpecial = function (regularCostOfItem, specialsObj, noItemsSold) {
    var numOfItemsForSpecial = specialsObj.numOfItemsForSpecial;

    var numberOfSaleItems = Math.floor(noItemsSold / numOfItemsForSpecial);
    var numberOfItemsNotPartOfSale = noItemsSold % numOfItemsForSpecial;

    var price = (numberOfSaleItems * specialsObj.price) + (numberOfItemsNotPartOfSale * regularCostOfItem);
    return  Math.round(price * 100) / 100;
}
