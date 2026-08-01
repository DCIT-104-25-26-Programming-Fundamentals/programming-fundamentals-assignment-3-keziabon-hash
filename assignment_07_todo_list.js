const readlineSync = require("readline-sync");

function addTask(tasks) {
    let task = readlineSync.question("Enter task: ");

    tasks.push(task);

    console.log('Task added: "' + task + '"');
}

function viewTasks(tasks) {
    if (tasks.length === 0) {
        console.log("Your task list is empty.");
        return;
    }

    console.log("Your Tasks:");

    for (let i = 0; i < tasks.length; i++) {
        console.log((i + 1) + ". " + tasks[i]);
    }
}

function deleteTask(tasks) {
    if (tasks.length === 0) {
        console.log("No tasks available to delete.");
        return;
    }

    viewTasks(tasks);

    let taskNumber = readlineSync.questionInt("Enter task number to delete: ");

    if (taskNumber < 1 || taskNumber > tasks.length) {
        console.log("Error: Invalid task number.");
        return;
    }

    let deletedTask = tasks[taskNumber - 1];

    tasks.splice(taskNumber - 1, 1);

    console.log('Task "' + deletedTask + '" has been removed.');
}

function displayMenu() {
    console.log();
    console.log("============================");
    console.log("     TO-DO LIST MENU");
    console.log("============================");
    console.log("1. Add task");
    console.log("2. View tasks");
    console.log("3. Delete task");
    console.log("4. Quit");
}

function main() {
    let tasks = [];
    let choice;

    do {
        displayMenu();

        choice = readlineSync.questionInt("Enter your choice (1-4): ");

        switch (choice) {
            case 1:
                addTask(tasks);
                break;

            case 2:
                viewTasks(tasks);
                break;

            case 3:
                deleteTask(tasks);
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