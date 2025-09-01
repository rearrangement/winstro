import { exec } from 'child_process';
import colors from '../colors';
import isAdmin from 'is-admin';

function pwsh() {
    // this is SUPER suspicious, no better way to do it, atleast from my knowledge :(
    const command: string = 'Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser';
    exec(`${command} > processes.log`, { encoding: 'utf-8' }, async (error) => {
        if (error) {
            colors.red("[✗] [winstro::pwsh]: error setting the execution policy for powershell")
            if (await isAdmin()) {
                colors.yellow("[⚠ ] [winstro::pwsh]: this is not an usual error..");                
            } else {
                colors.red("[✗] [winstro::pwsh]: this error is likely because you aren't running with administrator");
            }
        }
    });
}

export default pwsh;