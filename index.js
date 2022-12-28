#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
const sleep = (ms = 2000) => new Promise((res, rej) => setTimeout(res, ms));
async function welcome() {
    const rainbowtitle = chalkAnimation.rainbow(`Lets Start the game!!!`);
    await sleep();
    rainbowtitle.stop();
}
//  welcome();
let playerLife = 3;
async function askQuestion() {
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    do {
        playerLife--;
        console.log(`players life left ${playerLife}`);
        var que = await inquirer
            .prompt([{
                type: "number",
                name: "usr_num",
                message: chalk.rgb(250, 128, 114)("Select any number between 1 to 10"),
                // validate:(answers:number)=>{
                //     if(isNaN(answers)){
                //         return chalk.red('please enter a valid number')
                //     }
                //     return true;
                // }
            }]);
        // console.log(que)
        if (que.usr_num === randomNumber) {
            console.log(chalk.green(`Congratulation! you get the right number`));
        }
        else if (que.usr_num < randomNumber) {
            console.log(chalk.red(`your number ${que.usr_num} is less then guess number`));
        }
        else if (que.usr_num > randomNumber) {
            console.log(chalk.red(`your number ${que.usr_num} is greater then guess number`));
        }
    } while (playerLife > 0 && randomNumber !== que.usr_num);
    if (playerLife == 0 && playerLife !== que.usr_num) {
        console.log(chalk.redBright(`GAME OVER!!!`));
    }
}
// askQuestion();
async function startAgain() {
    do {
        console.clear();
        playerLife = 3;
        await welcome();
        await askQuestion();
        var restart = await inquirer.prompt([{
                type: "input",
                name: "start_again",
                message: "Do you want to restart the game? press Y or N "
            }]);
    } while (restart.start_again === 'y' || restart.start_again === 'YES' || restart.start_again === 'yes' || restart.start_again === 'Y');
}
startAgain();
