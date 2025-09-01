import { exec } from 'child_process';
import colors from '../colors';
import winget_requirements from '../../../config/requirements.winget';

async function install_package() {
    for (const requirement of winget_requirements) {
        const command: string = `winget install ${requirement} --silent --accept-package-agreements --accept-source-agreements`;
        try {
            await new Promise<void>((resolve, reject) => {
                exec(`${command} > install.log`, { encoding: 'utf-8' }, (error) => {
                    if (error) {
                        colors.red(`[winstro::install_package]: error installing package: ${error}`);
                        colors.red(`[winstro::install_package]: see install.log for more details`);
                        reject(error);
                    } else {
                        resolve();
                    }
                });
            });
        } catch (error) {
            // Error already logged above, continue to next package
        }
    }
}

export default install_package;