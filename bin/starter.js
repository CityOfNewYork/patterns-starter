#!/usr/bin/env node

/**
 * Installs the patterns and calls the scaffold command
 */

const util = require('util');
const exec = util.promisify(require('child_process').exec);

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
    console.log(`Installing @nycopportunity/pttrn...`);

    await run(`npm i @nycopportunity/pttrn`);

    console.log(`Scaffolding the project...`);

    await run(`npx pttrn scaffold`); // scaffold the project

    console.log(`Running the initial build...`);

    await run(`npx pttrn`); // create the initial build

    console.log(`You're all set! Add the recommended npm scripts https://github.com/CityOfNewYork/patterns-cli#npm-scripts to your package.json then run "npm start"`);

  } catch (error) {
    console.log(error);
  }
}

main();
