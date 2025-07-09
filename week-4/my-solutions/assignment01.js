const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
    .name('counter')
    .description('Count the number of words in the file')
    .version('0.0.1')

program
    .command('count')
    .description('To count the number of words in the File')
    .argument('<filePath', 'file path to count words')
    .action((filePath) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                num = data.split(' ').length;
                console.log(`There are ${num} words in the file`);
            }
        })
    })

program.parse();