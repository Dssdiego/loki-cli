const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer')

const about = (args, options, logger) => {
    // spinner.stopAndPersist().start()
    // spinnerInfo(spinner, constants.TEXT.about)
    // process.exit()

    console.log(
        chalk.yellow(
            figlet.textSync('Loki', {horizontalLayout: 'full'})
        )
    )

    // process.exit();
};

const hex2str = (args, options, logger) => {
    console.log(args);

    const questions = [{
        type: 'input',
        name: 'name',
        message: "What's your name?",
    }];

    inquirer.prompt(questions).then(answers => {
        console.log(`Hi ${answers['name']}!`)
    });
};

// const askRepoDetails = () => {
//     const argv = require('minimist')(process.argv.slice(2));
//
//     const questions = [
//         {
//             type: 'input',
//             name: 'name',
//             message: 'Enter a name for the repository:',
//             default: argv._[0] || files.getCurrentDirectoryBase(),
//             validate: function( value ) {
//                 if (value.length) {
//                     return true;
//                 } else {
//                     return 'Please enter a name for the repository.';
//                 }
//             }
//         },
//         {
//             type: 'input',
//             name: 'description',
//             default: argv._[1] || null,
//             message: 'Optionally enter a description of the repository:'
//         },
//         {
//             type: 'list',
//             name: 'visibility',
//             message: 'Public or private:',
//             choices: [ 'public', 'private' ],
//             default: 'public'
//         }
//     ];
//     return inquirer.prompt(questions);
// };

module.exports = {
    about,
    hex2str
};


