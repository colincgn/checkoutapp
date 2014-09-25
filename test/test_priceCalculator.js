var assert = require('chai').assert;

var proxyquire = require('proxyquire').noCallThru();

//Mocking the prices.json so that these tests are totally isolated.
var calculator = proxyquire('../price-calculator/price-calculator', {'../config/prices.json': [
    {
        "name": "apple",
        "price": 0.50,
        "specialOffers": [
            {
                "numOfItemsForSpecial": 2,
                "price": 0.50
            },
            {
                "numOfItemsForSpecial": 3,
                "price": 1.30
            }
        ]
    },
    {
        "name": "banana",
        "price": 0.60,
        "specialOffers": []
    },
    {
        "name": "orange",
        "price": 0.80,
        "specialOffers": [
            {
                "numOfItemsForSpecial": 2,
                "price": 1.2
            }
        ]
    }
]});

describe('Price Calculator', function () {
    describe('Calculate correct prices for items', function () {

        it('calculateCostOfItems should return Results with correct type and properties WITH special', function () {

            var results = calculator.calculateCostOfItems({orange: 2});
            assert.typeOf(results, 'array', 'Results is an object');
            assert.property(results[0], 'totalCost');
            assert.property(results[0], 'name');
            assert.property(results[0], 'specialLineItems');
        });

        it('calculateCostOfItems should return Results with correct type and properties WITHOUT special', function () {

            var results = calculator.calculateCostOfItems({banana: 2});
            assert.typeOf(results, 'array', 'Results is an object');
            assert.property(results[0], 'totalCost');
            assert.property(results[0], 'name');
            assert.property(results[0], 'specialLineItems');
        });

        it('Should calculate lowest price of items when they have multiple special offers', function () {

            var results = calculator.calculateCostOfItems({apple: 3})[0];
            assert.equal('apple', results.name);
            assert.equal(2, results.specialLineItems.length);
            assert.equal(2, results.specialLineItems[0].numberOfItems);
            assert.equal(0.5, results.specialLineItems[0].price);
            assert.equal(1, results.specialLineItems[1].numberOfItems);
            assert.equal(0.5, results.specialLineItems[1].price);
            assert.equal(1, results.totalCost);
        });

        it('Should return three items in the results array with correct prices, one without a special at all', function () {

            var results = calculator.calculateCostOfItems({apple: 4, banana:3});

            assert.equal(2, results.length);
            var apple = results[0];
            var banana = results[1];

            assert.equal('apple', apple.name);
            assert.equal(2, apple.specialLineItems.length);
            assert.equal(2, apple.specialLineItems[0].numberOfItems);
            assert.equal(0.5, apple.specialLineItems[0].price);
            assert.equal(2, apple.specialLineItems[1].numberOfItems);
            assert.equal(0.5, apple.specialLineItems[1].price);
            assert.equal(1, apple.totalCost);

            assert.equal('banana', banana.name);
            assert.equal(1, banana.specialLineItems.length);

            assert.equal(3, banana.specialLineItems[0].numberOfItems);
            assert.equal(1.8, banana.specialLineItems[0].price);
            assert.equal(1.8, banana.totalCost);
        });

    })
});
