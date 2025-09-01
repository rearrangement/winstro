import { exec } from 'child_process';
import colors from '../../colors';
import pwsh from '../../cli/pwsh';

function scoop() {
    pwsh(); // set the execution-policy status
    
    const command: string = 'Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression';
    exec(`${command} > processes.log`, { encoding: 'utf-8' }, (error) => {
        if (error) {
            colors.red("[✗] [winstro::scoop]: error installing scoop package manager")
        }
    });
}

export default scoop;