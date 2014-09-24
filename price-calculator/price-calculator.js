var prices = require('../config/prices.json');
var specialsCalculator = require('./specials-calculator');
var _ = require('lodash');

/*
 checkedOutItemsObj example.
 {apple:3, orange:1}
 */
exports.calculateCostOfItems = function (checkedOutItemsObj) {
    var result = [];
    _.forEach(checkedOutItemsObj, function (numOfItemsSold, key) {
        var priceObj = _.find(prices, {"name": key.toLowerCase()});

        if (priceObj !== undefined) {
            result.push({
                name: key,
                numberOfItems: numOfItemsSold,
                price: calculateItemCost(priceObj, numOfItemsSold)
            });
        } else {
            console.log("Err: Unknown Item Scanned");
        }
    });
    return result;
};

function calculateItemCost(priceObj, noItemsSold) {
    var price;
    if (priceObj.specialOffers.length > 0) {
        //If there are specials, calculate the cost of all specials and use the one with the highest savings.
        var totalsAfterDiscount = _.map(priceObj.specialOffers, function (special) {
            return  specialsCalculator.calculateCostWithSpecial(priceObj.price, special, noItemsSold);
        });
        price = _.min(totalsAfterDiscount);
    } else {
        price = calculateCostAtRegularPrice(priceObj, noItemsSold);
    }
    return price;
}

function calculateCostAtRegularPrice(priceObj, noItemsSold) {
    var price = priceObj.price * noItemsSold;
    return  Math.round(price * 100) / 100;
}


function convertPricesNamesToLowerCase() {
    return _.map(prices, function (priceObj) {
        return _.transform(priceObj, function (result, value, key) {
            key === "name" ? result[key] = value.toLowerCase() : result[key] = value;
        });
    });
}
