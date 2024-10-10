import chalk from "chalk"

function colors() {}

colors.blue = function(text: string) {
    console.log(chalk.blue(text))
}
colors.red = function(text: string) {
    console.log(chalk.red(text))
}
colors.green = function(text: string) {
    console.log(chalk.green(text))
}

colors.brightBlue = function(text: string) {
    console.log(chalk.blueBright(text))
}
colors.brightRed = function(text: string) {
    console.log(chalk.redBright(text))
}

export default colors