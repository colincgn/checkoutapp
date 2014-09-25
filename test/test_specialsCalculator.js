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

            var result1 = specialsCalculator.applySpecial(regularCostOfItem, special, 1);
            var costForOneItem = result1.saleLineItems;
            assert.equal(1, costForOneItem.length);
            assert.equal(0.5, costForOneItem[0].price);
            assert.equal(1, costForOneItem[0].numberOfItems);
            assert.equal(0.5, result1.totalCost);

            var result2 = specialsCalculator.applySpecial(regularCostOfItem, special, 2);
            var costForTwoItems = result2.saleLineItems;
            assert.equal(1, costForTwoItems.length);
            assert.equal(0.5, costForTwoItems[0].price);
            assert.equal(2, costForTwoItems[0].numberOfItems);
            assert.equal(0.5, result2.totalCost);


            var result3 = specialsCalculator.applySpecial(regularCostOfItem, special, 3);
            var costForThreeItems = result3.saleLineItems;
            assert.equal(2, costForThreeItems.length);
            assert.equal(0.5, costForThreeItems[0].price);
            assert.equal(2, costForThreeItems[0].numberOfItems);
            assert.equal(0.5, costForThreeItems[1].price);
            assert.equal(1, costForThreeItems[1].numberOfItems);
            assert.equal(1, result3.totalCost);


            var result4 = specialsCalculator.applySpecial(regularCostOfItem, special, 4);
            var costForFourItems = result4.saleLineItems;
            assert.equal(2, costForFourItems.length);
            assert.equal(0.5, costForFourItems[0].price);
            assert.equal(2, costForFourItems[0].numberOfItems);
            assert.equal(0.5, costForFourItems[1].price);
            assert.equal(2, costForFourItems[1].numberOfItems);
            assert.equal(1, result4.totalCost);


            var result5 = specialsCalculator.applySpecial(regularCostOfItem, special, 5);
            var costForFiveItems = result5.saleLineItems;
            assert.equal(3, costForFiveItems.length);
            assert.equal(0.5, costForFiveItems[0].price);
            assert.equal(2, costForFiveItems[0].numberOfItems);
            assert.equal(0.5, costForFiveItems[1].price);
            assert.equal(2, costForFiveItems[1].numberOfItems);
            assert.equal(0.5, costForFiveItems[2].price);
            assert.equal(1, costForFiveItems[2].numberOfItems);
            assert.equal(1.5, result5.totalCost);

        });

        it('Should be able to calculate buy one get one half price special', function () {

            var regularCostOfItem = 0.8;

            var special = {
                "numOfItemsForSpecial": 2,
                "price": 1.2
            };

            var result1 = specialsCalculator.applySpecial(regularCostOfItem, special, 1);
            var costForOneItem = result1.saleLineItems;
            assert.equal(1, costForOneItem.length);
            assert.equal(0.8, costForOneItem[0].price);
            assert.equal(1, costForOneItem[0].numberOfItems);
            assert.equal(0.8, result1.totalCost);


            var result2 = specialsCalculator.applySpecial(regularCostOfItem, special, 2);
            var costForTwoItems = result2.saleLineItems;
            assert.equal(1, costForTwoItems.length);
            assert.equal(1.2, costForTwoItems[0].price);
            assert.equal(2, costForTwoItems[0].numberOfItems);
            assert.equal(1.2, result2.totalCost);


            var result3 = specialsCalculator.applySpecial(regularCostOfItem, special, 3);
            var costForThreeItems = result3.saleLineItems;
            assert.equal(2, costForThreeItems.length);
            assert.equal(1.2, costForThreeItems[0].price);
            assert.equal(2, costForThreeItems[0].numberOfItems);
            assert.equal(0.8, costForThreeItems[1].price);
            assert.equal(1, costForThreeItems[1].numberOfItems);
            assert.equal(2, result3.totalCost);


            var result4 = specialsCalculator.applySpecial(regularCostOfItem, special, 4);
            var costForFourItems = result4.saleLineItems;
            assert.equal(2, costForFourItems.length);
            assert.equal(1.2, costForFourItems[0].price);
            assert.equal(2, costForFourItems[0].numberOfItems);
            assert.equal(1.2, costForFourItems[1].price);
            assert.equal(2, costForFourItems[1].numberOfItems);
            assert.equal(2.4, result4.totalCost);


            var result5 = specialsCalculator.applySpecial(regularCostOfItem, special, 5);
            var costForFiveItems = result5.saleLineItems;
            assert.equal(3, costForFiveItems.length);
            assert.equal(1.2, costForFiveItems[0].price);
            assert.equal(2, costForFiveItems[0].numberOfItems);
            assert.equal(1.2, costForFiveItems[1].price);
            assert.equal(2, costForFiveItems[1].numberOfItems);
            assert.equal(0.8, costForFiveItems[2].price);
            assert.equal(1, costForFiveItems[2].numberOfItems);
            assert.equal(3.2, result5.totalCost);


        });

        it('Should be able to calculate buy 3 for 1.30', function () {

            var regularCostOfItem = 0.5;

            var special = {
                "numOfItemsForSpecial": 3,
                "price": 1.30
            };

            var result2 = specialsCalculator.applySpecial(regularCostOfItem, special, 2);
            var costForTwoItems = result2.saleLineItems;
            assert.equal(1, costForTwoItems.length);
            assert.equal(1, costForTwoItems[0].price);
            assert.equal(2, costForTwoItems[0].numberOfItems);
            assert.equal(1, result2.totalCost);


            var result3 = specialsCalculator.applySpecial(regularCostOfItem, special, 3);
            var costForThreeItems = result3.saleLineItems;
            assert.equal(1, costForThreeItems.length);
            assert.equal(1.3, costForThreeItems[0].price);
            assert.equal(3, costForThreeItems[0].numberOfItems);
            assert.equal(1.3, result3.totalCost);


            var result4 = specialsCalculator.applySpecial(regularCostOfItem, special, 4);
            var costForFourItems = result4.saleLineItems;
            assert.equal(2, costForFourItems.length);
            assert.equal(1.3, costForFourItems[0].price);
            assert.equal(3, costForFourItems[0].numberOfItems);
            assert.equal(0.5, costForFourItems[1].price);
            assert.equal(1, costForFourItems[1].numberOfItems);
            assert.equal(1.8, result4.totalCost);

            var result5 = specialsCalculator.applySpecial(regularCostOfItem, special, 5);
            var costForFiveItems = result5.saleLineItems;
            assert.equal(2, costForFiveItems.length);
            assert.equal(1.3, costForFiveItems[0].price);
            assert.equal(3, costForFiveItems[0].numberOfItems);
            assert.equal(1, costForFiveItems[1].price);
            assert.equal(2, costForFiveItems[1].numberOfItems);
            assert.equal(2.3, result5.totalCost);

            var result6 = specialsCalculator.applySpecial(regularCostOfItem, special, 6);
            var costForSixItems = result6.saleLineItems;
            assert.equal(2, costForSixItems.length);
            assert.equal(1.3, costForSixItems[0].price);
            assert.equal(3, costForSixItems[0].numberOfItems);
            assert.equal(1.3, costForSixItems[1].price);
            assert.equal(3, costForSixItems[1].numberOfItems);
            assert.equal(2.6, result6.totalCost);

            var result7 = specialsCalculator.applySpecial(regularCostOfItem, special, 7);
            var costForSevenItems = result7.saleLineItems;
            assert.equal(3, costForSevenItems.length);
            assert.equal(1.3, costForSevenItems[0].price);
            assert.equal(3, costForSevenItems[0].numberOfItems);
            assert.equal(1.3, costForSevenItems[1].price);
            assert.equal(3, costForSevenItems[1].numberOfItems);
            assert.equal(0.5, costForSevenItems[2].price);
            assert.equal(1, costForSevenItems[2].numberOfItems);
            assert.equal(3.1, result7.totalCost);

        });


    })
})
