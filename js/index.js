const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('../utils/generateMarkdown')

// Use writeFileSync method to use promises instead of a callback function

inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your full name?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your Email?',
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the name of your Project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the purpose of your project?',
      },
      {
        type: 'input',
        name: 'install',
        message: 'Give a step, by step instruction of how to get the development running',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What are the instructions for use?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What License do you want to use?',
        choices: ['MIT', 'Mozilla Public License', 'The Unlicense', 'Eclipse Public License']
      },
      {
        type: 'input',
        name: 'screenShot',
        message: 'What is the image path to your apps screenshot?',
      },
      {
        type: 'input',
        name: 'coverPhoto',
        message: 'What is the image path to your cover photo?',
      },
  ])
    .then((answers) => {
        const mdPageContent = generateMarkdown(answers)
        fs.writeFile(`${answers.title}.md`, mdPageContent, (err) =>
        err ? console.error(err) : console.log(`Successfully wrote to ${answers.title}.md`)
        );
        console.log(answers)
    })
    

