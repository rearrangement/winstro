import isAdmin from "is-admin";
import colors from "./src/util/colors";
import hook from "./src/util/cli/cli";
import { logo } from "./src/logo";

async function main() {
    console.log(logo);
    if (await isAdmin()) {
        colors.green("[✗] [wincdt::main]: process already started as admin, skipping elevation warning")
        hook();
    } else {
        colors.yellow("[⚠ ] [wincdt::main]:  process not running as admin, you might want to consider running it as admin to prevent issues with powershell signing.")
        hook();
    }
}

main();