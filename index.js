#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
// creating a function to stop the animation effect
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000); // after 2 seconds
    });
};
async function welcome() {
    let neonAnima = chalkAnimation.neon(" CLI Calculator For Panaverse Metaverse 3.0 Project 00", 1); // start of the koraoke effect
    await sleep();
    neonAnima.stop(); // stopping the effect
    console.log(chalk.yellow(`
     _____________________
    |  _________________  |
    | |RAUF PIAIC205994 | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|

    `));
    console.log(chalk.red(`
                                                                                                  
_____         _         _           _____  _      _       _  _       _      _____            ___ 
|     | ___  _| | ___   | |_  _ _   |  _  || |_  _| | _ _ | || | ___ | |_   | __  | ___  _ _ |  _|
| | | || .'|| . || -_|  | . || | |  |     || . || . || | || || || .'||   |  |    -|| .'|| | ||  _|
|_|_|_||__,||___||___|  |___||_  |  |__|__||___||___||___||_||_||__,||_|_|  |__|__||__,||___||_|  
                             |___|                                                                
`));
}
await welcome(); // runs the welcoming function
/*seperate array to show colors on the ===>>> doesnt work, no output ???
const choices = ["Addition", "Subtraction", "Multiplication", "Division"];
const coloredChoices = choices.map(choice => {
    switch (choice) {
        case "Addition":
            return chalk.green(choice);
        case "Subtraction":
            return chalk.yellow(choice);
        case "Multiplication":
            return chalk.blue(choice);
        case "Division":
            return chalk.magentaBright(choice);
        default:
            return choice;
    }
});
*/
// using npm questions to get input from user
async function askInput() {
    const answers = await inquirer.prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operator",
            message: chalk.inverse.bold("WHAT ARITHMATIC OPERATION DO YOU WANT TO PERFORM? \n"),
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
        {
            type: "number",
            name: "n1",
            message: chalk.white.bgMagenta("Enter First Number: "),
            validate: function (val) {
                if (!isNaN(val) && Number(val)) {
                    return true;
                }
                else {
                    return "Please enter a valid number";
                }
            },
            filter: function (val) {
                return isNaN(val) ? undefined : Number(val);
            },
        },
        {
            type: "number",
            name: "n2",
            message: chalk.white.bgMagenta("Enter Second Number: "),
            validate: function (val) {
                if (!isNaN(val) && Number(val)) {
                    return true;
                }
                else {
                    return "Please enter a valid number";
                }
            },
            filter: function (val) {
                return isNaN(val) ? undefined : Number(val);
            },
        },
    ]);
    // Use user feedback for... whatever!!
    // console.log(answers)
    if (answers.operator == "Addition") {
        console.log(chalk.green(`${answers.n1} + ${answers.n2} = ${answers.n1 + answers.n2}`));
    }
    else if (answers.operator == "Subtraction") {
        console.log(chalk.yellow(`${answers.n1} - ${answers.n2} = ${answers.n1 - answers.n2}`));
    }
    else if (answers.operator == "Multiplication") {
        console.log(chalk.blue(`${answers.n1} * ${answers.n2} = ${answers.n1 * answers.n2}`));
    }
    else if (answers.operator == "Division") {
        console.log(chalk.magentaBright(`${answers.n1} / ${answers.n2} = ${answers.n1 / answers.n2}`));
    }
}
// askInput();
async function doOver() {
    do {
        await askInput();
        var again = await inquirer.prompt({
            type: "input",
            name: "redo",
            message: (chalk.bgBlack.cyanBright("Do you want to perform another calculation? Enter Y or N: ")),
        });
    } while (again.redo == "Y" ||
        again.redo == "y" ||
        again.redo == "Yes" ||
        again.redo == "YES");
}
doOver();
