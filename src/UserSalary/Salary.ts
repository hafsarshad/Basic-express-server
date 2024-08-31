import * as readline from 'readline';

const calculateSalary = (days : number , rate : number): number =>{
      return  days * rate ;
}

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
})
 rl.question('enter days you worked  ', (input)=>{
   const days : number = parseInt(input)
      rl.question('enter rate  ', (inputrate)=>{
        const rate : number = parseFloat(inputrate)

        const total : number = calculateSalary(days, rate);
        console.log (total);      
        rl.close();
      })

 } )
