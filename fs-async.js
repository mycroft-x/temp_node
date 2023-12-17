// BLOCK CODE

const { readFile, writeFile } = require('fs')
console.log('strat');
readFile('./content/first.txt', 'utf8', (error, result) => {
    if (error) {
        console.log(error);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, res) => {
        if (err) {
            console.log(err);
            return "he";
        }
        const second = res;
        writeFile('./content/result-async.txt',
            `WOOOP ${first} ${second}`,
            (err, res) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('doneee');
            })
    })
})
console.log('NEXTTTT');