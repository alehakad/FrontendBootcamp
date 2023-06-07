// 1
function isEven(number) {
  return number % 2 == 0;
}

console.log(isEven(2));
console.log(isEven(15));

// 2
function oddNumbers(numbers) {
  for (n of numbers) {
    if (n % 2 == 1) console.log(n);
  }
}

// 3
function checkExists(numbers, numExists) {
  for (n of numbers) {
    if (n === numExists) return true;
  }
  return false;
}

console.log(checkExists([1, 2, 3], 2));
console.log(checkExists([1, 2, 3], 5));

// 4
var calculator = {
  add: function add(n1, n2) {
    return n1 + n2;
  },
  subtract: function subtract(n1, n2) {
    return n1 - n2;
  },
};

const result1 = calculator.add(20, 1);
const result2 = calculator.subtract(30, 9);

console.log(calculator.add(result1, result2)); //should print 42

// 5

const turnToKing = function (name, money) {
  name = name.toUpperCase();
  money = increaseByNameLength(money, name);
  name = makeRegal(name);

  console.log(name + " has " + money + " gold coins");
};

turnToKing("martin luther", 100); // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

function increaseByNameLength(money, name) {
  return money * name.length;
}

function makeRegal(name) {
  return "His Royal Highness," + name;
}
