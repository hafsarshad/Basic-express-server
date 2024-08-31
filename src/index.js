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
var Factorial = function (n) {
    if (n < 0) {
        return ("Factorial is not defined for negative numbers.");
    }
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
};
console.log("the fictorial of ".concat(7, " is, ").concat(Factorial(7), " "));
