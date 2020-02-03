const chalk = require('chalk');
const figlet = require('figlet');

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

module.exports = {
    about
};


