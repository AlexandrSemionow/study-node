const isEven = require("./is-even").isEven;
const isOdd = (num) => !isEven(num);
module.exports = isOdd;
