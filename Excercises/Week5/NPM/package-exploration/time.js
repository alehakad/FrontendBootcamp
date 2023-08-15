const moment = require("moment");
let timeNow = new Date();
console.log(timeNow);

let foramttedTime = moment().format("MMMM Do, YYYY");
console.log(foramttedTime);
