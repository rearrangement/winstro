import chalk from "chalk"

function colors() {
    console.log("Use dot notation to use the text colors");
}

colors.blue = function(text: string) {
    console.log(chalk.blue(text));
}
colors.red = function(text: string) {
    console.log(chalk.red(text));
}
colors.green = function(text: string) {
    console.log(chalk.green(text));
}
colors.yellow = function(text: string) {
    console.log(chalk.yellow(text));
}
colors.purple = function(text: string) {
    console.log(chalk.magenta(text));
}

colors.brightBlue = function(text: string) {
    console.log(chalk.blueBright(text));
}
colors.brightRed = function(text: string) {
    console.log(chalk.redBright(text));
}

export default colors