var assert = require('chai').assert;
var specialsCalculator = require("../price-calculator/specials-calculator");

describe('Specials Calculator', function () {
    describe('Specials Calculator', function () {

        it('Should be able to calculate buy one get one free special', function () {

            var regularCostOfItem = 0.5;

            var special = {
                "numOfItemsForSpecial": 2,
                "price": 0.5
            };

            var costForTwoItems = specialsCalculator.calculateCostWithSpecial(regularCostOfItem, special, 2);
            assert.equal(0.5, costForTwoItems);

            var costForThreeItems = specialsCalculator.calculateCostWithSpecial(regularCostOfItem, special, 3);
            assert.equal(1, costForThreeItems);

            var costForFourItems = specialsCalculator.calculateCostWithSpecial(regularCostOfItem, special, 4);
            assert.equal(1, costForFourItems);

            var costForFiveItems = specialsCalculator.calculateCostWithSpecial(regularCostOfItem, special, 5);
            assert.equal(1.5, costForFiveItems);

        });

        it('Should be able to calculate buy one get one half price special', function () {

            var regularCostOfItem = 0.8;

            var special = {
                "numOfItemsForSpecial": 2,
                "price": 1.2
            };

            var costForTwoItems = specialsCalculator.calculateCostWithSpecial(regularCostOfItem, special, 2);
            assert.equal(1.2, costForTwoItems);

            var costForThreeItems = specialsCalculator.calculateCostWithSpecial(regularCostOfItem, special, 3);
            assert.equal(2, costForThreeItems);

            var costForFourItems = specialsCalculator.calculateCostWithSpecial(regularCostOfItem, special, 4);
            assert.equal(2.4, costForFourItems);

            var costForFiveItems = specialsCalculator.calculateCostWithSpecial(regularCostOfItem, special, 5);
            assert.equal(3.2, costForFiveItems);

        });

        it('Should be able to calculate buy 3 for 1.30', function () {

            var regularCostOfItem = 0.5;

            var special = {
                "numOfItemsForSpecial": 3,
                "price": 1.30
            };

            var costForTwoItems = specialsCalculator.calculateCostWithSpecial(regularCostOfItem, special, 2);
            assert.equal(1, costForTwoItems);

            var costForThreeItems = specialsCalculator.calculateCostWithSpecial(regularCostOfItem, special, 3);
            assert.equal(1.3, costForThreeItems);

            var costForFourItems = specialsCalculator.calculateCostWithSpecial(regularCostOfItem, special, 4);
            assert.equal(1.8, costForFourItems);

            var costForFiveItems = specialsCalculator.calculateCostWithSpecial(regularCostOfItem, special, 5);
            assert.equal(2.3, costForFiveItems);

            var costForSixItems = specialsCalculator.calculateCostWithSpecial(regularCostOfItem, special, 6);
            assert.equal(2.6, costForSixItems);

        });


    })
})
