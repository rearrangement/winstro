import colors from '../colors'
import * as readline from 'readline';
import * as fs from 'fs';
import * as path from 'path';

function write_config() {
    // Prompts the user for package names, generates a config file, and writes it to requirements.winget.ts in the config folder.

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter package names separated by commas, example: (Creator.Package1,Creator.Package2): ', (answer) => {
        const packages = answer.split(',').map(pkg => pkg.trim()).filter(pkg => pkg.length > 0);
        const configContent = `const winget_requirements: string[] = [${packages.map(pkg => `'${pkg}'`).join(', ')}];\nexport default winget_requirements;\n`;
        const configDir = path.resolve(__dirname, '../../../config');
        if (!fs.existsSync(configDir)) {
            fs.mkdirSync(configDir, { recursive: true });
        }
        fs.writeFileSync(path.join(configDir, 'requirements.winget.ts'), configContent, 'utf8');
        console.log(colors.green('[wincdt::write_config]: requirements.winget.ts has been created successfully.'));
        rl.close();
    });

    // Example of the config file:
    /*
    const winget_requirements: string[] = ['TranslucentTB'];
    export default winget_requirements;
    */

}

export default write_config