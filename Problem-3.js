class SpecialSeries {
    generateSeries(x) {
        if (!Number.isInteger(x) || x < 1) {
            throw new Error('Input must be a positive integer');
        }

        let series = [];
      
        if (x === 1 || x === 2) {
            return [1];
        }

        let count = Math.min(x, 5);
        let currentNumber = 1;

        for (let i = 0; i < count; i++) {
            series.push(currentNumber);
            currentNumber += 2;
        }

        return series;
    }

    displaySeries(x) {
        try {
            const series = this.generateSeries(x);
            return `Input a = ${x}, then output: ${series.join(', ')}`;
        } catch (error) {
            return `Error: ${error.message}`;
        }
    }
}

const seriesGenerator = new SpecialSeries();

console.log(seriesGenerator.displaySeries(1));
console.log(seriesGenerator.displaySeries(2));
console.log(seriesGenerator.displaySeries(3));
console.log(seriesGenerator.displaySeries(4));
console.log(seriesGenerator.displaySeries(5));
console.log(seriesGenerator.displaySeries(6));
console.log(seriesGenerator.displaySeries(7));
