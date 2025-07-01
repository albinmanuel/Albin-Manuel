class NumberSeries {
    generateSeries(x) {
        if (!Number.isInteger(x) || x < 1) {
            throw new Error('Input must be a positive integer');
        }

        let series = [];
        let currentNumber = 1;

        for (let i = 0; i < x; i++) {
            series.push(currentNumber);
            currentNumber += 2;
        }

        return series;
    }

    displaySeries(x) {
        const series = this.generateSeries(x);
        return series.join(', ');
    }
}

const seriesGenerator = new NumberSeries();

try {
    console.log('Input a = 1, Output:', seriesGenerator.displaySeries(1));
    console.log('Input a = 2, Output:', seriesGenerator.displaySeries(2));
    console.log('Input a = 3, Output:', seriesGenerator.displaySeries(3));
    console.log('Input a = 4, Output:', seriesGenerator.displaySeries(4));
    console.log('Input a = 5, Output:', seriesGenerator.displaySeries(5));
} catch (error) {
    console.error('Error:', error.message);
}
