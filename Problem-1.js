class Calculator {
    calculate(a, b, operation) {
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);

        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Invalid input: Please provide valid numbers');
        }

        switch (operation.toLowerCase()) {
            case 'add':
            case '+':
                return num1 + num2;
            case 'subtract':
            case '-':
                return num1 - num2;
            case 'multiply':
            case '*':
                return num1 * num2;
            case 'divide':
            case '/':
                if (num2 === 0) {
                    throw new Error('Division by zero is not allowed');
                }
                return num1 / num2;
            default:
                throw new Error('Invalid operation: Please use add(+), subtract(-), multiply(*), or divide(/)');
        }
    }
}

const calc = new Calculator();

try {
    console.log('Addition:', calc.calculate(10.5, 5.5, 'add'));
    console.log('Subtraction:', calc.calculate(10.5, 5.5, '-'));
    console.log('Multiplication:', calc.calculate(10.5, 5.5, '*'));
    console.log('Division:', calc.calculate(10.5, 5.5, 'divide'));
} catch (error) {
    console.error('Error:', error.message);
}
