using Microsoft.VisualStudio.TestTools.UnitTesting;
using PricingEngineApp;

namespace PricingEngineTests
{
    [TestClass]
    public class PricingEngineTests
    {
        [TestMethod]
        public void CalculateUnitPrice_BelowMinPrice()
        {
            // arrange
            PricingEngine engine = new PricingEngine(false);
            // act
            decimal unitPrice = engine.CalculateUnitPrice(10, 0.50m);
            // assert
            Assert.AreEqual(unitPrice, 0.50m);

        }

        [TestMethod]
        public void CalculateUnitPrice_MinPrice()
        {
            // arrange
            PricingEngine engine = new PricingEngine(false);
            // act
            decimal unitPrice = engine.CalculateUnitPrice(10, 1.00m);
            // assert
            Assert.AreEqual(unitPrice, 1.000m);
        }

        [TestMethod]
        public void CalculateUnitPrice_BelowMinQty()
        {
            // arrange
            PricingEngine engine = new PricingEngine(false);
           
            // act
            try
            {
                decimal actualPrice = engine.CalculateUnitPrice(0, 10.00m);
            }
            // assert
            catch (System.ArgumentOutOfRangeException e)
            {
                StringAssert.Contains(e.Message, PricingEngine.UPriceBelowMinQtyeMsg);
                return;
            }

            Assert.Fail("The expected exception was not thrown.");
        }

        [TestMethod]
        public void CalculateUnitPrice_MinQtyLower()
        {
            // arrange
            PricingEngine engine = new PricingEngine(false);
            decimal regPrice = 10.00m;
            decimal estPrice = 10.00m; 

            // act
            decimal actPrice = engine.CalculateUnitPrice(10, regPrice);

            // assert
            Assert.AreEqual(estPrice, actPrice);

            // Assert.Fail();
        }

        [TestMethod]
        public void CalculateUnitPrice_MinQtyUpper()
        {
            // arrange
            PricingEngine engine = new PricingEngine(false);
            decimal regPrice = 10.00m;
            decimal estPrice = 9.00m;

            // act
            decimal actPrice = engine.CalculateUnitPrice(20, regPrice);

            // assert
            Assert.AreEqual(estPrice, actPrice);
            //Assert.Fail();
        }

        [TestMethod]
        public void CalculateUnitPrice_QtyGT20()
        {
            // arrange
            PricingEngine engine = new PricingEngine(false);
            decimal regPrice = 10.00m;
            decimal estPrice = 8.00m;

            // act
            decimal actPrice = engine.CalculateUnitPrice(21, regPrice);

            // assert
            Assert.AreEqual(estPrice, actPrice);

            //Assert.Fail();
        }

        [TestMethod]
        public void CalculateUnitPrice_HolidayBelowMinPrice()
        {
            // arrange
            PricingEngine engine = new PricingEngine(true);

            // act
            decimal unitPrice = engine.CalculateUnitPrice(10, 0.50m);
            // assert
            Assert.AreEqual(unitPrice, 0.50m);
            //Assert.Fail();
        }

        [TestMethod]
        public void CalculateUnitPrice_HolidayBelowMinTotal()
        {
            // arrange
            PricingEngine engine = new PricingEngine(true);
            // act
            decimal unitPrice = engine.CalculateUnitPrice(10, 1.00m);
            // assert
            Assert.AreEqual(unitPrice, 1.000m);
    //      Assert.Fail();
        }

        [TestMethod]
        public void CalculateUnitPrice_HolidayBelowMinQty()
        {
            // Test the discount for holiday and quantity = 10 and total
            // discounted amount is above the holiday threshold

            // arrange
            PricingEngine engine = new PricingEngine(true);

            // act
            decimal unitPrice = engine.CalculateUnitPrice(10, 100.00m);
            // assert
            Assert.AreEqual(unitPrice, 100.00m);
            //Assert.Fail();
        }

        [TestMethod]
        public void CalculateUnitPrice_HolidayMinQty()
        {
            // Test the discount for holiday and quantity = 10 and total
            // discounted amount is above the holiday threshold

            // arrange
            PricingEngine engine = new PricingEngine(true);

            // act
            decimal unitPrice = engine.CalculateUnitPrice(10, 100.01m);
            // assert
            Assert.AreEqual(unitPrice, 90.0090m);
            //Assert.Fail();
        }
    }
}
