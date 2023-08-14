class Animal {
  constructor(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.children = [];
  }

  giveBirth(name) {
    console.log("Boom. Birthed " + name);
    this.children.push(name);
  }
}

dog = new Animal("Bobik", 3);

console.log(dog.name);
dog.giveBirth("Juk");
console.log(dog.children);
