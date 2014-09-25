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
        var itemName = key.toLowerCase();
        var priceObj = _.find(prices, {"name": itemName});

        result.push(_.assign(calculateItemCost(priceObj, numOfItemsSold), {"name": itemName}))
    });
    return result;
};

function calculateItemCost(priceObj, numOfItemsSold) {
    var price;
    if (priceObj.specialOffers.length > 0) {

        var totalsAfterDiscount = _.map(priceObj.specialOffers, function (special) {
            return  specialsCalculator.applySpecial(priceObj.price, special, numOfItemsSold);
        });

        //If there are specials, calculate the cost of all specials and use the one with the highest savings.
        price = _.min(totalsAfterDiscount, function (specials) {
            return specials.totalCost;
        });
    } else {
        price = calculateCostAtRegularPrice(priceObj, numOfItemsSold);
    }

    return price;
}

function calculateCostAtRegularPrice(priceObj, noItemsSold) {
    var price =  specialsCalculator.roundTwoDecimalPlaces(priceObj.price * noItemsSold);
    return {
        totalCost: price,
        saleLineItems: [
            {
                numberOfItems: noItemsSold,
                price: price
            }
        ]

    }
}
