const fs = require('fs');

let data = readFile('./input/students.csv');

if (data) {
    data += '\npippo,pluto,paperino';
    writeData('./output/joke2.csv', data);
}

function readFile(url) {
    try {
        const data = fs.readFileSync('./input/students.csv', 'utf8');
        return data;
    } catch (err) {
        console.error(err.message);
        return null;
    }
}

function writeData(url, data) {
    try {
        fs.readFileSync(url, data);
    } catch (err) {
        console.error(err.message);
    }
}