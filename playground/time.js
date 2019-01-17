const moment = require('moment');

// let date = moment();
// date.add(1, 'year').subtract(9, 'months');  // adds one year to current year and subtracts 9 months
// console.log(date.format('MMM Do, YYYY'));

let someTimestamp = moment().valueOf();
console.log(someTimestamp);

let createdAt = 1234;
let date = moment(createdAt);
console.log(date.format('h:mm a'));

