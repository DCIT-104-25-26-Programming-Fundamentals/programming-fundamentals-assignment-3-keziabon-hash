const readlineSync = require("readline-sync");

function calculateAverage(scores) {
    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    return total / scores.length;
}

function addStudent(students) {
    let student = {};

    student.name = readlineSync.question("Student name: ");
    student.id = readlineSync.questionInt("Student ID: ");

    let numberOfScores = readlineSync.questionInt("How many scores? ");

    student.scores = [];

    for (let i = 0; i < numberOfScores; i++) {
        let score = readlineSync.questionFloat("Enter score " + (i + 1) + ": ");
        student.scores.push(score);
    }

    students.push(student);

    console.log('Student "' + student.name + '" added successfully.');
}

function displayStudents(students) {
    if (students.length === 0) {
        console.log("No students have been added yet.");
        return;
    }

    console.log("\nStudent Records:");

    for (let i = 0; i < students.length; i++) {
        console.log("----------------------------");
        console.log("Name: " + students[i].name);
        console.log("ID: " + students[i].id);
        console.log("Scores: " + students[i].scores.join(", "));
        console.log("Average: " + calculateAverage(students[i].scores).toFixed(2));
    }
}

function findStudentAverage(students) {
    let id = readlineSync.questionInt("Enter student ID: ");

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            console.log(
                students[i].name +
                "'s average score: " +
                calculateAverage(students[i].scores).toFixed(2)
            );
            return;
        }
    }

    console.log("Error: Student ID not found.");
}

function displayMenu() {
    console.log();
    console.log("================================");
    console.log("   STUDENT RECORD SYSTEM MENU");
    console.log("================================");
    console.log("1. Add student");
    console.log("2. Display all students");
    console.log("3. Calculate average score");
    console.log("4. Quit");
}

function main() {
    let students = [];
    let choice;

    do {
        displayMenu();

        choice = readlineSync.questionInt("Enter your choice (1-4): ");

        switch (choice) {
            case 1:
                addStudent(students);
                break;

            case 2:
                displayStudents(students);
                break;

            case 3:
                findStudentAverage(students);
                break;

            case 4:
                console.log("Goodbye!");
                break;

            default:
                console.log("Error: Invalid choice. Please select between 1 and 4.");
        }

    } while (choice !== 4);
}

main();