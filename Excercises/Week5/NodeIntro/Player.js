class Player {
  constructor(name) {
    this.name = name;
  }
  say(message) {
    console.log(`${this.name} says ${message}`);
  }
}

module.exports = Player;
