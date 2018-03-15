var fs = require('fs');

fs.readFile('file.txt', { encoding: 'utf8' }, (err, data) => {
    if (!err) {
        console.log(data);
    }
});

var data = fs.readFileSync('file.txt', { encoding: 'utf8' });
console.log(data);