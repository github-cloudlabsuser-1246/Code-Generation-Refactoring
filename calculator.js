const readline = require('readline');

class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculator = new Calculator();

const askQuestion = () => {
    rl.question('Enter operation (add, subtract, multiply, divide) and two numbers: ', (answer) => {
        const [operation, num1, num2] = answer.split(' ');
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        try {
            let result;
            switch (operation) {
                case 'add':
                    result = calculator.add(a, b);
                    break;
                case 'subtract':
                    result = calculator.subtract(a, b);
                    break;
                case 'multiply':
                    result = calculator.multiply(a, b);
                    break;
                case 'divide':
                    result = calculator.divide(a, b);
                    break;
                default:
                    console.log('Invalid operation');
                    askQuestion();
                    return;
            }
            console.log(`Result: ${result}`);
        } catch (error) {
            console.log(error.message);
        }

        askQuestion();
    });
};

askQuestion();
