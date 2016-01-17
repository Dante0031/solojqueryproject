/**
 * Created by NathanBriscoe on 1/15/16.
 */
var random = require('./random');

var firstName = ['Sam', 'Joe', 'Zach', 'Scott', 'Liz', 'Anthony', 'Charlie', 'Amber', 'Chris', 'Brookes'];

var lastName = ['Smith', 'Wessel', 'Miller', 'Bromander', 'McFinnigans', 'Johnson', 'Rasario', 'Kline', 'Davidson'];

function randomStudent(){
    var first = firstName[random(0, firstName.length - 1)];
    var last = lastName[random(0, lastName.length - 1)];

    return first + ' ' + last;
}

console.log(randomStudent);

module.exports = randomStudent;