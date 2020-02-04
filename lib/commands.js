const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');
const clear = require('clear');

const about = (args, options, logger) => {
    console.log(
        chalk.yellow(
            figlet.textSync('Loki', {horizontalLayout: 'full'})
        )
    )

    // process.exit();
};

const hex2str = (args, options, logger) => {
    const hex = args.hex;
    let stringResult = '';

    hex.split(' ').forEach((c) => {
        stringResult += convertHexToString(c);
    });

    console.log(stringResult);

    // const questions = [{
    //     type: 'input',
    //     name: 'hex',
    //     message: "Type your HEX string",
    // }];
    //
    // inquirer.prompt(questions).then(answers => {
    //     console.log(convertHexToString(answers['hex']));
    //     // console.log(`Hi ${answers['hex']}!`)
    // });
};

const convertHexToString = (str1) => {
    const hex = str1.toString();
    let str = '';
    for (var n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
}

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


