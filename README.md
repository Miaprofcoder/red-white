# E Commerce Backend API (UCSD Challenge 13)

## Description

- A simple and robust E-Commerce back-end API utilizing MySQL as a database.
- With this back-end API, front-end developers can utilize data from a back-end database to use for development.
- This project has furthered my knowledge in back-end database systems and architecture.

## Features

- Utilizes Sequelize to interact with a MySQL database.
- Uses ExpressJS as a web framework, and NodeJS as a server environment.
- GET, POST, PUT, and DELETE HTTP methods for each API endpoint.

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

1. Ensure you have NodeJS installed on your computer. [Click here if you need to install NodeJS.](https://nodejs.org/en)
2. Clone or download the zip of the GitHub repository. Extract and navigate to the repository in your directory.
3. Open your command-line terminal in your repository directory and type `npm i` to download all npm package dependencies needed to run the program.
4. Ensure you have the ecommerce_db schema on your MySQL database schemas. [If unsure on how to setup MySQL schemas, click here.](https://dev.mysql.com/doc/refman/8.0/en/create-database.html)
5. A .env file will be needed to establish environment variables for your database's name, user, and password. DB_NAME, DB_USER, & DB_PASSWORD are the required key names to properly initialize your MySQL connection via Sequelize. [If you're unfamiliar with .env files, click here.](https://nodejs.dev/en/learn/how-to-read-environment-variables-from-nodejs/).
6. Once a .env file has been properly set, do `npm start` in your command-line terminal to start the application. IT IS RECOMMENDED TO USE AN APPLICATION LIKE INSOMNIA TO TEST OUT THE BACK-END API. 
7. *OPTIONAL: If you would like to have starter data in your database to play around with, type `npm run seed` on your terminal to seed starter data in your database.*

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

ðŸ† The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.