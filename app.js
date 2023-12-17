// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about package)
//      manual approach (create package.json in the root, create properties etc)
//      npm init (step-by-stpe, press Enter to Skip)
//      npm init -y (default)

const _ = require('lodash')

const items = [1, [2, [3, [4, [5]]]]]
const newItems = _.flatMapDeep(items)

console.log(newItems);