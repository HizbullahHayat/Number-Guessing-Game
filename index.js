import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let turnoff = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let karaoke = chalkAnimation.karaoke("WELCOME TO MY NUMBER GUESSING GAME");
    await turnoff();
    karaoke.stop();
    console.log(chalk.greenBright(`
    
██████╗ ███████╗██╗   ██╗███████╗██╗      ██████╗ ██████╗ ███████╗██████╗     ██████╗ ██╗   ██╗    ██╗  ██╗██╗███████╗██████╗ ██╗   ██╗██╗     ██╗      █████╗ ██╗  ██╗
██╔══██╗██╔════╝██║   ██║██╔════╝██║     ██╔═══██╗██╔══██╗██╔════╝██╔══██╗    ██╔══██╗╚██╗ ██╔╝    ██║  ██║██║╚══███╔╝██╔══██╗██║   ██║██║     ██║     ██╔══██╗██║  ██║
██║  ██║█████╗  ██║   ██║█████╗  ██║     ██║   ██║██████╔╝█████╗  ██║  ██║    ██████╔╝ ╚████╔╝     ███████║██║  ███╔╝ ██████╔╝██║   ██║██║     ██║     ███████║███████║
██║  ██║██╔══╝  ╚██╗ ██╔╝██╔══╝  ██║     ██║   ██║██╔═══╝ ██╔══╝  ██║  ██║    ██╔══██╗  ╚██╔╝      ██╔══██║██║ ███╔╝  ██╔══██╗██║   ██║██║     ██║     ██╔══██║██╔══██║
██████╔╝███████╗ ╚████╔╝ ███████╗███████╗╚██████╔╝██║     ███████╗██████╔╝    ██████╔╝   ██║       ██║  ██║██║███████╗██████╔╝╚██████╔╝███████╗███████╗██║  ██║██║  ██║
╚═════╝ ╚══════╝  ╚═══╝  ╚══════╝╚══════╝ ╚═════╝ ╚═╝     ╚══════╝╚═════╝     ╚═════╝    ╚═╝       ╚═╝  ╚═╝╚═╝╚══════╝╚═════╝  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝
                                                                                                                                                                                                                                                                                             
    `));
    console.log(chalk.bold.bgBlue(`PRESS SPACE OR ARROW KEY TO START GAME........`));
}
welcome();
let userName = await inquirer.prompt({
    type: "input",
    name: "Uname",
    message: "Please enter your name: "
});
console.log("Player name = ", chalk.bgBlue(`Welcome`, userName.Uname));
async function askQuestion() {
    let guess = await inquirer.prompt({
        type: "number",
        name: "Ask Input",
        message: "Please enter the number from 1-10 ..."
    });
    let number = Math.floor(Math.random() * 10);
    if (guess["Ask Input"] == number) {
        console.log(chalk.green.bold(`Congrats ${userName.Uname} you guess right number which is ${guess["Ask Input"]}`));
    }
    else {
        console.log(chalk.red.bold(`Sorry ${userName.Uname} your guess about number "${guess["Ask Input"]}" was wrong. Please try again ...`));
    }
}
;
async function repeat() {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            type: "input",
            name: "repeatagain",
            message: "Do you want to play agin Yes (y) or NO (n): "
        });
    } while (again.repeatagain == "YES" || again.repeatagain == "Y" || again.repeatagain == "y");
}
repeat();
