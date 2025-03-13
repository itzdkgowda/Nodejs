const fs =require('fs');
fs.writeFileSync('hello.txt', 'Hello from Node.js!');
fs.appendFileSync('hello.txt', 'Hello again!');