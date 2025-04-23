import inquirer from 'inquirer'
import colors from '../colors.ts'
import write_config from '../config/write_config.ts';
import read_config from '../config/read_config.ts';

async function main() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Install', 'Auto-create config (in beta)', 'Exit'],
        },
    ]);

    switch (answers.action) {
        case 'Install':
            colors.green('Reading current config && installing!');
            read_config();
            break;
        case 'Auto-create config (in beta)':
            colors.green('Writing config!');
            write_config();
            break;
        case 'Exit':
            colors.red('Exiting...');
            return;
        default:
            colors.red('Invalid choice');
    }
    next_step();
}

async function next_step() {
    const answers = await inquirer.prompt([
        {
         type: 'list',
         name: 'action',
         message: 'What would you like to do?',
         choices: ['Continue', 'Exit'],  
        },
    ]);
    switch(answers.action) {
        case 'Continue':
            colors.green('Continuing with the installation');
            read_config();
            break;
        case 'Exit':
            colors.red('Exiting..');
            return;                                                                                                                                                               
    }
}

main();