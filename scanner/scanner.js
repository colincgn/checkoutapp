var prices = require('../config/prices.json');
var _ = require('lodash');

var items = {};

exports.scanItem = function (scannedItem) {
    if (isValidItem(scannedItem)) {
        var currentScans = items[scannedItem];
        if (currentScans) {
            items[scannedItem]++;
        } else {
            items[scannedItem] = 1;
        }
    } else {
        console.log("Err: Unknown Item Scanned : " + scannedItem);
    }
};

function isValidItem(item) {
    var priceObj = _.find(prices, {"name": item});
    return priceObj !== undefined;
}

exports.getAllItems = function () {
    return items;
};

exports.resetScanner = function () {
    items = {};
};
