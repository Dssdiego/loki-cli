#!/usr/bin/env node
'use strict'

const prog = require('caporal');

const commands = require('../lib/commands.js');

prog
    .version('1.0.0')
    .command('about', 'About the app')
    .action(commands.about)

    .command('hex2str', 'Converts HEX string to readable text')
    .argument('[hex..]', 'HEX to be converted')
    .action(commands.hex2str);

prog.parse(process.argv);
