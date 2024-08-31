"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var calculateSalary = function (days, rate) {
    return days * rate;
};
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('enter days you worked', function (input) {
    var days = parseInt(input);
    rl.question('enter rate ', function (inputrate) {
        var rate = parseFloat(inputrate);
        var total = calculateSalary(days, rate);
        console.log(total);
        rl.close();
    });
});
