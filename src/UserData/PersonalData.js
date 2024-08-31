"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function getUserInput() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(function (resolve, reject) {
        rl.question('Enter your name: ', function (name) {
            if (!name) {
                reject(new Error('Name is required.'));
                return;
            }
            rl.question('Enter your age (optional): ', function (ageInput) {
                var age = ageInput ? parseInt(ageInput, 10) : undefined;
                rl.question('Enter your email (optional): ', function (email) {
                    rl.close();
                    resolve({
                        name: name,
                        age: age,
                        email: email || undefined
                    });
                });
            });
        });
    });
}
getUserInput()
    .then(function (user) { return console.log('User input received:', user); })
    .catch(function (error) { return console.error(error); });
