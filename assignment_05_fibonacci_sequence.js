const readlineSync = require("readline-sync");

function printFibonacci(n) {
    if (n <= 0) {
        console.log("Error: Number of terms must be positive.");
        return;
    }

    let first = 0;
    let second = 1;
    let sequence = "";

    for (let i = 1; i <= n; i++) {
        sequence += first + " ";

        let next = first + second;
        first = second;
        second = next;
    }

    console.log("Fibonacci sequence: " + sequence.trim());
}

function isFibonacci(number) {
    if (number < 0) {
        return false;
    }

    let first = 0;
    let second = 1;

    while (first <= number) {
        if (first === number) {
            return true;
        }

        let next = first + second;
        first = second;
        second = next;
    }

    return false;
}

function main() {
    let terms = readlineSync.questionInt("How many terms? ");

    printFibonacci(terms);

    console.log();

    let number = readlineSync.questionInt("Enter a number to check: ");

    if (isFibonacci(number)) {
        console.log(number + " is a Fibonacci number.");
    } else {
        console.log(number + " is NOT a Fibonacci number.");
    }
}

main();