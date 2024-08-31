import * as readline from 'readline';

interface User {
  name: string;
  age?: number;
  email?: string;
}

function getUserInput(): Promise<User> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve, reject) => {
    rl.question('Enter your name: ', (name) => {
      if (!name) {
        reject(new Error('Name is required.'));
        return;
      }

      rl.question('Enter your age (optional): ', (ageInput) => {
        const age = ageInput ? parseInt(ageInput, 10) : undefined;

        rl.question('Enter your email (optional): ', (email) => {
          rl.close();

          resolve({
            name,
            age,
            email: email || undefined
          });
        });
      });
    });
  });
}

getUserInput()
  .then(user => console.log('User input received:', user))
  .catch(error => console.error(error));
