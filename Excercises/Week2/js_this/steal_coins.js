const tipJar = {
  coinCount: 20,
  tip: function () {
    this.coinCount += 1;
  },
  stealCoins: function (coinsToSteal) {
    this.coinCount -= coinsToSteal;
    if (this.coinCount < 0) console.log("Oh no! Negative coins in tipJar!");
  },
};

tipJar.tip();
console.log("Tip jar should have 21 coins: " + tipJar.coinCount);

tipJar.stealCoins(3);
console.log("Tip jar should have 18 coins: " + tipJar.coinCount);

tipJar.stealCoins(10);
console.log("Tip jar should have 8 coins: " + tipJar.coinCount);
