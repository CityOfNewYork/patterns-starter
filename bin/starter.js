#!/usr/bin/env node

/**
 * Installs the patterns and calls the scaffold command
 */

const util = require("util");
const exec = util.promisify(require("child_process").exec);

/**
 * Execute the passed command 
 */
async function run(command){
  try {
    await exec(command);
  } catch {
    (err) => {
      console.error(err);
    };
  }
}

/**
 * Installs pttrn and runs scaffold
 */
async function main() {
  try {
    console.log(`Setting up your new Patterns Project! Please wait...`);

    await run(`npm i @nycopportunity/pttrn`);

    await run(`npx pttrn scaffold`);

    console.log(`You're all set!`);

  } catch (error) {
    console.log(error);
  }
}

main()