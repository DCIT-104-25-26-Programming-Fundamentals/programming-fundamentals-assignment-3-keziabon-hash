const readlineSync = require("readline-sync");

function printSingleTable(number) {
    console.log("Multiplication Table for " + number + ":");

    for (let i = 1; i <= 12; i++) {
        console.log(number + "  x  " + i + "  =  " + (number * i));
    }
}

function printTablesUpToN(n) {
    for (let number = 1; number <= n; number++) {
        console.log("Multiplication Table for " + number + ":");

        for (let i = 1; i <= 12; i++) {
            console.log(number + "  x  " + i + "  =  " + (number * i));
        }

        console.log("---------------------------");
    }
}

function main() {
    let number = readlineSync.questionInt("Enter a number for single table: ");

    if (number <= 0) {
        console.log("Error: Number must be positive.");
        return;
    }

    printSingleTable(number);

    console.log();

    let n = readlineSync.questionInt("Enter N for tables from 1 to N: ");

    if (n <= 0) {
        console.log("Error: Number must be positive.");
        return;
    }

    printTablesUpToN(n);
}

main();