import { exec } from 'child_process';
import colors from '../colors';
import winget_requirements from '../../config/requirements.winget';

async function install_package() {
    winget_requirements.forEach((requirement: string) => {
        const command: string = `echo ${requirement}`;
        exec(`${command} > log.txt`, { encoding: 'utf-8'}, (error) => {
            if (error) {
                console.error(`${colors.red("[wincdt::install_package]: ")} error installing package: ${error}`);
            }
        })
    })
}

install_package();

export default install_package;