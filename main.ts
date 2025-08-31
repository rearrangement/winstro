import isAdmin from "is-admin";
import colors from "./src/util/colors";
import cli from "./src/util/cli/cli";
import { logo, headless_logo } from "./src/logo";

import { parseArgs } from 'node:util';
import install_package from "./src/util/install/install_package";
const { values, positionals } = parseArgs({
  args: Bun.argv.slice(2),
  options: {
    help: {
      type: 'boolean',
    },
    headless: {
      type: 'boolean',
    },
  },
  strict: true,
  allowPositionals: true,
});

if (values.help) {
    console.log(`
wincdt - WINdows Custom Dependency Tool
Usage: wincdt [options]
Options:
  --help          Show this help message
  --headless      Run in headless mode (no interactive prompts)
`);
    process.exit(0);
}

if (values.headless) {
    console.log(headless_logo);
    colors.green('[✓] [wincdt::main]: headless mode detected, installing without prompts');
    install_package();
} else {
    main();
}

async function main() {
    console.log(logo);
    if (await isAdmin()) {
        colors.green("[✗] [wincdt::main]: process already started as admin, skipping elevation warning")
        cli();
    } else {
        colors.yellow("[⚠ ] [wincdt::main]:  process not running as admin, you might want to consider running it as admin to prevent issues with powershell signing.")
        cli();
    }
}