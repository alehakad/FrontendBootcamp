const { faker } = require("@faker-js/faker");
const util = require("util");

function makeHuman(nHumnas) {
  for (let i = 0; i < nHumnas; i++) {
    let newHuman = {
      userName: faker.internet.userName(),
      companyName: faker.company.name(),
      userAvatar: faker.internet.avatar(),
    };
    console.log(`Created ${util.inspect(newHuman, false, null, true)}`);
  }
}

makeHuman(3);
