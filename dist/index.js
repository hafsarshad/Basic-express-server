"use strict";
// const greeting = (name: string): string => {
//     return `Hello, ${name}!`;
//   };
// const fictorial=(a: number): number  =>{
//        for(i=1 , i>=a , i--){
//        }
//        return `fictorial is ${}`
// }
//   console.log(greeting("Hamza"));
// Factorial function using recursion
const factorial = (n) => {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
};
// Example usage
const number = 5;
console.log(`Factorial of ${number} is ${factorial(number)}`);
