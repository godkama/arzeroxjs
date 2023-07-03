# arzeroxjs-npm

ArzeroxJS is an NPM module using the discord.js library which allows you to create discord bots easier. It can be used anywhere and requires as only download `npm i arzeroxjs`

# Versions

## Latest Version

> /!\ With our current interactive CLI you won't be able to use Git Bash

Current version : Stable 1.12.0

[View full changelog](##Version-1.12.0)

- Added an interactive CLI to log into your bot with no code.
  ![CLIPreview](https://i.imgur.com/lOW0eal.png)
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
