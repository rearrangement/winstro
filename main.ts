import isAdmin from "is-admin";
import colors from "./src/util/colors";
import cli from "./src/util/cli/cli";
import write_config from "./src/util/config/write_config";
import { logo, headless_logo, write_logo } from "./src/logo";

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
    qwrite: {
      type: 'boolean',
    },
  },
  strict: true,
  allowPositionals: true,
});

if (values.help) {
    console.log(`
winstro - Windows made as a distro
Usage: winstro [options]
Options:
  --help          Show this help message
  --headless      Run in headless mode (no interactive prompts)
  --qwrite        (MANUALLY) Generate a config file based on currently installed packages
Examples:
  winstro --headless
  winstro --write
`);
    process.exit(0);
}

if (values.qwrite) {
    console.log(write_logo);
    colors.green('[✓] [winstro::main]: write mode detected, prompting user to generate config file');
    write_config();
}

if (values.headless) {
    console.log(headless_logo);
    colors.green('[✓] [winstro::main]: headless mode detected, installing without prompts');
    install_package();
} else if (!values.qwrite) {
    main();
}


async function main() {
    console.log(logo);
    if (await isAdmin()) {
        colors.green("[✗] [winstro::main]: process already started as admin, skipping elevation warning")
        cli();
    } else {
        colors.yellow("[⚠ ] [winstro::main]:  process not running as admin, you might want to consider running it as admin to prevent issues with powershell signing.")
        cli();
    }
}