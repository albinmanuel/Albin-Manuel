class MultipleCounter {
    countMultiples(numbers) {
        if (!Array.isArray(numbers)) {
            throw new Error('Input must be an array of numbers');
        }
      
        let result = {};
        for (let i = 1; i <= 9; i++) {
            result[i] = 0;
        }

        numbers.forEach(num => {
            for (let i = 1; i <= 9; i++) {
                if (num % i === 0) {
                    result[i]++;
                }
            }
        });

        return result;
    }

    displayResults(numbers) {
        try {
            const result = this.countMultiples(numbers);
            return `Input: [${numbers.join(',')}]\nOutput: ${JSON.stringify(result)}`;
        } catch (error) {
            return `Error: ${error.message}`;
        }
    }
}

const counter = new MultipleCounter();

const input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
console.log(counter.displayResults(input));
console.log(counter.displayResults([]));
console.log(counter.displayResults([7]));
console.log(counter.displayResults([10, 20, 30, 40, 50]));
