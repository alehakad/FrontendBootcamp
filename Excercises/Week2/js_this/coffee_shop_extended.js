const coffeeShop = {
  beans: 40,
  money: 100,

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 10, price: 5 },
    doubleShot: { beanRequirement: 10, price: 15 },
    frenchPress: { beanRequirement: 10, price: 12 },
  },

  buyBeans: function (numBeans) {
    let beansPrice = numBeans * beanPrice;
    if (this.money >= beansPrice) {
      this.money -= beanPrice;
      this.beans += numBeans;
      console.log("Beans bought");
    } else {
      console.log("Coffee shop is out of money");
    }
  },

  makeDrink: function (drinkType) {
    if (drinkType in this.drinkRequirements) {
      if (this.beans >= this.drinkRequirements[drinkType]) {
        console.log("Your drink is ready");
        this.beans -= this.drinkRequirements[drinkType].beanRequirement;
        return true;
      } else {
        console.log("Sorry, we are all out of beans!");
        return false;
      }
    } else {
      console.log("Sorry, we dont make");
      return false;
    }
  },

  buyDrink: function (drinkType) {
    let drinkMade = this.makeDrink(drinkType);
    if (drinkMade) {
      this.money += this.drinkRequirements[drinkType].money;
    } else {
      console.log("Sorry, we cant make this drink now");
    }
  },
};

let beanPrice = 1;
coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.buyBeans(12);
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
