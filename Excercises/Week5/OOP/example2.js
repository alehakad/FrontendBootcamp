class Human {
  constructor(name, age, isFriendly) {
    this.name = name;
    this.age = age;
    this.isFriendly = isFriendly;
  }
}

class Vehicle {
  static carsSold = 0;
  static carPrice = 30000;
  constructor(x, y, speed, fuel) {
    this.x = x;
    this.y = y;
    this._speed = speed;
    this._fuel = fuel;
    Vehicle.carsSold++;
  }
  static getInfo() {
    console.log("We've sold " + Vehicle.carsSold + " vehicles."); // static method
  }
  static calculateMoney() {
    console.log(`Made ${Vehicle.carPrice * Vehicle.carsSold}`);
  }
  set speed(newSpeed) {
    if (newSpeed < 0) {
      return console.log("Speed must be >=0");
    }
    this._speed = newSpeed;
  }
  get speed() {
    return this._speed;
  }
  set fuel(fuel) {
    if (fuel < 0 || fuel > 150) {
      return console.log("Fuel amout is incorrect");
    }
    this._fuel = fuel;
  }
  get fuel() {
    return this._fuel;
  }
}
// aron = new Human("Aron", 23, true);
// console.log(aron.name, aron.age, aron.isFriendly);

// car1 = new Vehicle(1, 2, 3);
// car2 = new Vehicle(4, 5, 6);
// Vehicle.getInfo();
// Vehicle.calculateMoney();
const c = new Vehicle();
c.x = 3;
c.y = 1;
c.speed = -2; // at this point, we'll get the console log saying speed needs to be positive
console.log(c.speed); // prints undefined
c.speed = 23;
console.log(c.speed);

// set x(value) {
//   this.x = value
// } // will cause ininite loop

c.fuel = 151;
console.log(c.fuel);
c.fuel = 20;
console.log(c.fuel);
