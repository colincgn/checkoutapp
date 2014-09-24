var items = {};

exports.scanItem = function(scannedItem) {
    var currentScans = items[scannedItem];
    if(currentScans) {
        items[scannedItem]++;
    } else {
        items[scannedItem] = 1;
    }
};

exports.getAllItems = function() {
    return items;
};

exports.resetScanner = function() {
    items = {};
};
