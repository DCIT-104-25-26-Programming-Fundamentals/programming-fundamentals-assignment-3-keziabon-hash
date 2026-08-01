const readlineSync = require("readline-sync");

function calculateSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

function calculateAverage(numbers) {
    return calculateSum(numbers) / numbers.length;
}

function findMaximum(numbers) {
    let maximum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
        }
    }

    return maximum;
}

function findMinimum(numbers) {
    let minimum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minimum) {
            minimum = numbers[i];
        }
    }

    return minimum;
}

function main() {
    let n = readlineSync.questionInt("How many numbers? ");

    if (n <= 0) {
        console.log("Error: Number of values must be positive.");
        return;
    }

    let numbers = [];

    for (let i = 0; i < n; i++) {
        let number = readlineSync.questionInt(`Enter number ${i + 1}: `);
        numbers.push(number);
    }

    console.log("\nResults:");
    console.log("Sum:     " + calculateSum(numbers));
    console.log("Average: " + calculateAverage(numbers));
    console.log("Maximum: " + findMaximum(numbers));
    console.log("Minimum: " + findMinimum(numbers));
}

main();