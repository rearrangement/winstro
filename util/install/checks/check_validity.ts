import { exec } from 'child_process';
// to-do: make this actually work, this prototype should
// in theory be able to install a package or run a command
// not 100% sure tho

async function check_package_loop(packages: any) {
    // typescript angy when I use package
    for (let pkg in packages) {
        try {
            const { stdout, stderr } = await exec("winget install" + pkg);
            console.log('stdout:' + stdout);
            console.log('stderr:' + stderr);
        } catch (error) {
            console.log("[wincdt>>checks>>check_validity]: stderr:" + error);
        }
    }
}

function check_validity(packages: object) {
    check_package_loop(packages);
}

export default check_validity;