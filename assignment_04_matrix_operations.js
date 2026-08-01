const readlineSync = require('readline-sync');

function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = "";

        for (let j = 0; j < matrix[i].length; j++) {
            row += String(matrix[i][j]).padStart(5, " ");
        }

        console.log(row);
    }
}

function transposeMatrix(matrix) {
    let transpose = [];

    for (let i = 0; i < matrix[0].length; i++) {
        transpose[i] = [];

        for (let j = 0; j < matrix.length; j++) {
            transpose[i][j] = matrix[j][i];
        }
    }

    return transpose;
}

function addMatrices(matrixA, matrixB) {
    let result = [];

    for (let i = 0; i < matrixA.length; i++) {
        result[i] = [];

        for (let j = 0; j < matrixA[i].length; j++) {
            result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }

    return result;
}

function multiplyMatrices(matrixA, matrixB) {
    let result = [];

    for (let i = 0; i < matrixA.length; i++) {
        result[i] = [];

        for (let j = 0; j < matrixB[0].length; j++) {
            result[i][j] = 0;

            for (let k = 0; k < matrixA[i].length; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return result;
}

function readMatrix(rows, cols, name) {
    let matrix = [];

    console.log(`Enter elements of ${name}:`);

    for (let i = 0; i < rows; i++) {
        let row = readlineSync.question(`Enter row ${i + 1}: `);

        matrix.push(row.split(" ").map(Number));

        if (matrix[i].length !== cols) {
            console.log("Error: Incorrect number of columns entered.");
            return null;
        }
    }

    return matrix;
}

function main() {
    let rows = readlineSync.questionInt("Enter number of rows: ");
    let cols = readlineSync.questionInt("Enter number of columns: ");

    if (rows <= 0 || cols <= 0) {
        console.log("Error: Matrix dimensions must be positive.");
        return;
    }

    let matrixA = readMatrix(rows, cols, "Matrix A");

    if (matrixA === null) {
        return;
    }

    console.log("\nOriginal Matrix:");
    displayMatrix(matrixA);

    console.log("\nTransposed Matrix:");
    displayMatrix(transposeMatrix(matrixA));

    let matrixB = readMatrix(rows, cols, "Matrix B");

    if (matrixB === null) {
        return;
    }

    console.log("\nMatrix Addition Result:");
    displayMatrix(addMatrices(matrixA, matrixB));

    let rowsB = readlineSync.questionInt("\nEnter number of rows for Matrix B multiplication: ");
    let colsB = readlineSync.questionInt("Enter number of columns for Matrix B multiplication: ");

    if (cols !== rowsB) {
        console.log("Error: Matrix multiplication is not possible.");
        return;
    }

    let matrixBMultiply = readMatrix(rowsB, colsB, "Matrix B for multiplication");

    if (matrixBMultiply === null) {
        return;
    }

    console.log("\nMatrix Multiplication Result:");
    displayMatrix(multiplyMatrices(matrixA, matrixBMultiply));
}

main();