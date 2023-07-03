# arzeroxjs-npm

ArzeroxJS is an NPM module using the discord.js library which allows you to create discord bots easier. It can be used anywhere and requires as only download `npm i arzeroxjs`

# Tutorial to use

- Install node.js
- Create a new folder
- Go to the navigation bar and type `cmd`
- Type `npm init -y` in your command prompt
  > Make sure to put your main file as index.js
- Fill in the rest of the fields
- Next type `npm i arzeroxjs`
- Once this is done, type `ajsreg` or run the `.exe` and click on **INITIALIZE**
- Fill in your token ( [Here is how to get one](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token) )
- Run `node .` to start your bot once the program is done running.

# Versions

## Latest Version

> /!\ With our current interactive CLI you won't be able to use Git Bash

Current version : Stable 1.13.0

[View full changelog](##Version-1.13.0)

- Fully functional code maker
- Bug Fixes
- Compiled into a `.exe`
- You can now run the CLI with the command `ajsreg`

## Version 1.1.0

- Added text handler ( currently undergoing tests. )
- Added text command maker ( undergoing tests. )

## Version 1.1.1

- Fix of bugs.

## Version 1.1.4

- Starting Builders development

## Version 1.2.0

- Major fixes to `botLogin()`
- Error logging
- Starting the development of the `clientActivity()` class

## Version 1.7.0

- Added example scripts
- Fixed npm labelling error

## Version 1.8.0 Major

> Disclaimer : This is still experimental code and might not work perfectly

- Added definitions for all functions
- Finished clientStatus() function. See wiki

## Version 1.9.0

> Currently working on a dynamic terminal allowing to make your bot easier

- Stable `clientLogin()`
- Dynamic error handling
- clientStatus() function working. How to use available soon.
- Chalk package error handling.
- Function definitions

## Version 1.12.0

> Disclaimer : Even though this is stable, it doesn't fully work

### Features

- Added an interactive CLI to log into your bot with no code.
- Implemented a new feature: Compiled the script into a `.exe` for easier distribution.
- Updated the CLI command to run the application: Instead of running the script directly, you can now use the command `ajsreg`.

### Bug Fixes

- Fixed the issue with the window title not being set correctly.
- Resolved an issue where the arrow keys were not functioning correctly in the Git Bash terminal.
- Addressed the problem of the script exiting too quickly by using the `await` keyword for asynchronous prompt handling.
- Added error handling for launching the script without the required command-line argument.
- Improved the user experience by displaying a helpful error message when running the script in Git Bash without proper support.
- Included a password prompt when selecting the "Login" option in the CLI.

![CLIPreview](https://i.imgur.com/lOW0eal.png)

### Additional

- Added definitions for `setup.js`
- `pkg.json` is used in order to compile the code.
- Preparing an input based terminal.

## Version 13.0.0

### Added

- Added the `fs` and `path` modules to handle file system operations.
- Added the `chalk` module for colorful console output.
- Imported the `botLogin` and `clientStatus` functions from the `index.js` file.
- Imported the `inquirer` module for handling user input.
- Added the `blankCode` variable containing the initial code for the "index.js" file.
- Implemented the `startCLI` function to handle the command-line interface logic.

### Changed

- Cleared the console and set the process title to "AJS Runtime".
- Defined the available choices for the user prompt.

### Fixed

- Fixed compatibility issues with Git Bash.

### Features

- Prompted the user to select an action (initialize, login, or exit).
- Extracted the selected option from the prompt's answer.
- Implemented a switch statement to handle each selected option.
- Added the "init" case to handle the initialization action.
- Defined the root path, folder path, and index file path variables.
- Created a `sleep` function to simulate a delay.
- Implemented the `createFiles` function to create the "Commands" folder and "index.js" file.
- Added a loading animation while creating folders and files.
- Checked if the "Commands" folder already exists and displayed a message accordingly.
- Prompted the user for their token to generate the sample code for the "index.js" file.
- Updated the "index.js" file with the generated sample code.
- Displayed messages indicating the creation and updating of the "index.js" file.
- Added a prompt for the user's token in the "login" case.
- Called the `botLogin` function with the provided token.
- Added an "exit" case to gracefully exit the program.
