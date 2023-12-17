const { log } = require('console');
const path = require('path')

const filePath = path.join('/content/', 'sub', 'text.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const resolve = path.resolve(__dirname,'content','sub','text.txt')
console.log(resolve);