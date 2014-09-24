var assert = require('chai').assert;

var proxyquire = require('proxyquire').noCallThru();;

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

        it('calculateCostOfItems should return Results with correct type and properties ', function () {

            var results = calculator.calculateCostOfItems({orange: 2});
            assert.typeOf(results, 'array', 'Results is an array');
            assert.property(results[0], 'name');
            assert.property(results[0], 'numberOfItems');
            assert.property(results[0], 'price');
        });

        it('Should calculate lowest price of items when they have multiple special offers', function () {

            var results = calculator.calculateCostOfItems({apple: 3});
            var result = results[0];

            assert.equal('apple', result.name);
            assert.equal(3, result.numberOfItems);
            assert.equal(1, result.price);
        });

        it('Should return three items in the results array with correct prices, one without a special at all', function () {

            var results = calculator.calculateCostOfItems({apple: 4, orange:3, banana:3});

            assert.equal(3, results.length);
            var apple = results[0];
            var orange = results[1];
            var banana = results[2];

            assert.equal('apple', apple.name);
            assert.equal(4, apple.numberOfItems);
            assert.equal(1, apple.price);

            assert.equal('orange', orange.name);
            assert.equal(3, orange.numberOfItems);
            assert.equal(2, orange.price);

            assert.equal('banana', banana.name);
            assert.equal(3, banana.numberOfItems);
            assert.equal(1.8, banana.price);
        });

    })
});
