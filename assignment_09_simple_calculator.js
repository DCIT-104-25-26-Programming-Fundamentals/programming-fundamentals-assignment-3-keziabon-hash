const readlineSync = require("readline-sync");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function exponent(a, b) {
    return a ** b;
}

function displayMenu() {
    console.log();
    console.log("============================");
    console.log("     SIMPLE CALCULATOR");
    console.log("============================");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulus");
    console.log("6. Exponentiation");
    console.log("7. Quit");
}

function main() {
    let choice;

    do {
        displayMenu();

        choice = readlineSync.questionInt("Select an operation (1-7): ");

        if (choice >= 1 && choice <= 6) {
            let firstNumber = readlineSync.questionFloat("Enter first number: ");
            let secondNumber = readlineSync.questionFloat("Enter second number: ");

            let result;

            switch (choice) {
                case 1:
                    result = add(firstNumber, secondNumber);
                    console.log(
                        "Result: " + firstNumber + " + " + secondNumber +
                        " = " + result.toFixed(2)
                    );
                    break;

                case 2:
                    result = subtract(firstNumber, secondNumber);
                    console.log(
                        "Result: " + firstNumber + " - " + secondNumber +
                        " = " + result.toFixed(2)
                    );
                    break;

                case 3:
                    result = multiply(firstNumber, secondNumber);
                    console.log(
                        "Result: " + firstNumber + " * " + secondNumber +
                        " = " + result.toFixed(2)
                    );
                    break;

                case 4:
                    if (secondNumber === 0) {
                        console.log("Error: Cannot divide by zero.");
                    } else {
                        result = divide(firstNumber, secondNumber);
                        console.log(
                            "Result: " + firstNumber + " / " + secondNumber +
                            " = " + result.toFixed(2)
                        );
                    }
                    break;

                case 5:
                    if (secondNumber === 0) {
                        console.log("Error: Cannot perform modulus by zero.");
                    } else {
                        result = modulus(firstNumber, secondNumber);
                        console.log(
                            "Result: " + firstNumber + " % " + secondNumber +
                            " = " + result.toFixed(2)
                        );
                    }
                    break;

                case 6:
                    result = exponent(firstNumber, secondNumber);
                    console.log(
                        "Result: " + firstNumber + " ** " + secondNumber +
                        " = " + result.toFixed(2)
                    );
                    break;
            }
        } 
        else if (choice === 7) {
            console.log("Goodbye!");
        } 
        else {
            console.log("Error: Invalid choice. Please select between 1 and 7.");
        }

    } while (choice !== 7);
}

main();