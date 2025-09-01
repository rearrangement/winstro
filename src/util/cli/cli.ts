import inquirer from 'inquirer';
import colors from '../colors.ts';
import install_package from '../install/install_package.ts';
import write_config from '../config/write_config.ts';

async function cli() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'what would you like to do?',
            choices: ['install', 'write', 'exit'],
        },
    ]);

    switch (answers.action) {
        case 'install':
            colors.green('[✓] reading current config && installing');
            install_package();
            break;
        case 'write':
            colors.green('[✓] going to write mode!!');
            write_config();
            break;
        case 'exit':
            colors.red('[✗] exiting...');
            return;
        default:
            colors.red('[✗] invalid choice');
    }
}

export default cli;