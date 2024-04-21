#! /usr/bin/env node
import inquirer from "inquirer";
const words = await inquirer.prompt([
    {
        name: "sentences",
        type: "input",
        message: "Enter Your Words Counter"
    }
]);
const user = words.sentences.trim().split(" ");
console.log(user);
console.log(`Your Sentences is:${user.length}`);
