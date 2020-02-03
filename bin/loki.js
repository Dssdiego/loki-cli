const prog = require('caporal');

const commands = require('../lib/commands.js');

prog
    .version('1.0.0')
    .command('about', 'About the app')
    .action(commands.about);

prog.parse(process.argv);
