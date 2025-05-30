import inquirer from 'inquirer';
import colors from '../colors.ts';
import install_package from '../install/install_package.ts';

// also stupid, found bugs tho, this fixed them
async function hook() {
    first_step();
}

async function first_step() {
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

export default hook;