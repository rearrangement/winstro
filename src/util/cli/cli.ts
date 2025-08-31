import inquirer from 'inquirer';
import colors from '../colors.ts';
import install_package from '../install/install_package.ts';

async function cli() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'what would you like to do?',
            choices: ['install', 'exit'],
        },
    ]);

    switch (answers.action) {
        case 'install':
            colors.green('[✓] reading current config && installing');
            install_package();
            break;
        case 'exit':
            colors.red('[✗] exiting...');
            return;
        default:
            colors.red('[✗] invalid choice');
    }
}

export default cli;