// const greeting = (name: string): string => {
//     return `Hello, ${name}!`;
//   };
//   console.log(greeting("hafsa"));
// Factorial function using recursion
const Factorial = (n: number): number | string => {
    if (n < 0) {
      return ("Factorial is not for negative numbers.");
      }
    
      
    let result  = 1
      for (let i = 1; i <= n; i++) {
        result = result * i;
      }
    
      return result;
  };
console.log(
    `the fictorial of ${7} is, ${Factorial(7)} `
);