import { exec } from 'child_process';
import colors from '../colors';
import winget_requirements from '../../../config/requirements.winget';

async function install_package() {
    // i know that this is hell, please ignore
    winget_requirements.forEach((requirement: string) => {
        // TODO: make another installation process without using winget, seperate into different functions
        const command: string = `winget install ${requirement} --silent --accept-package-agreements --accept-source-agreements`; // flags are for automatic installation
        exec(`${command} > install.log`, { encoding: 'utf-8' }, (error) => {
            if (error) {
                colors.red(`[wincdt::install_package]: error installing package: ${error}`)
            }
        })
    })
}

// TODO: make the functions exported by themselves instead of default modules
export default install_package;