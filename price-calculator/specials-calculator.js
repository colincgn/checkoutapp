/*
 specialsObj eg.
 {
 "numOfItemsForSpecial": 2,
 "price": 0.50
 }
 */
exports.applySpecial = function (regularCostOfItem, specialsObj, totalNumberOfItemsSold) {
    var numOfItemsForSpecial = specialsObj.numOfItemsForSpecial;

    var numberOfSpecialSaleGroups = Math.floor(totalNumberOfItemsSold / numOfItemsForSpecial);
    var numberOfItemsNotPartOfSale = totalNumberOfItemsSold % numOfItemsForSpecial;

    var price = (numberOfSpecialSaleGroups * specialsObj.price) + (numberOfItemsNotPartOfSale * regularCostOfItem);

    return {
        totalCost: roundTwoDecimalPlaces(price),
        specialLineItems: addSpecialLineItems(numberOfSpecialSaleGroups, specialsObj, numOfItemsForSpecial, regularCostOfItem, numberOfItemsNotPartOfSale)
    };
};

function addSpecialLineItems(numberOfSpecialSaleGroups, specialsObj, numOfItemsForSpecial, regularCostOfItem, numberOfItemsNotPartOfSale) {
    var result = [];
    for (var x = 1; x <= numberOfSpecialSaleGroups; x++) {
        result.push(createSpecialItemReturnObj(roundTwoDecimalPlaces(specialsObj.price), numOfItemsForSpecial));
    }

    if (numberOfItemsNotPartOfSale > 0) {
        var regularPrice = numberOfItemsNotPartOfSale * regularCostOfItem;
        result.push(createSpecialItemReturnObj(roundTwoDecimalPlaces(regularPrice), numberOfItemsNotPartOfSale));
    }
    return result;
}

function roundTwoDecimalPlaces(price) {
    return Math.round(price * 100) / 100;
}

function createSpecialItemReturnObj(price, numberOfItems) {
    return {
        numberOfItems: numberOfItems,
        price: price
    };
}

