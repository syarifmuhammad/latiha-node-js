const path = require('path');
const fs = require('fs');

const file = fs.readFileSync(path.resolve(__dirname, 'notes.txt'), 'utf-8');
console.log(file);