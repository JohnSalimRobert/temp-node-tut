// Requiring the path Built-in module
const path = require('path')

// Path seperator
console.log(path.sep)

//Joining a path 
const filePath = path.join('/content/','subfolder','text.txt')
console.log(filePath)

//Path Base 
const base = path.basename(filePath)
console.log(base)

// Absolute Path Resolver
const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute)