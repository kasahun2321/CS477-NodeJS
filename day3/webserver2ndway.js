const http = require('http');
const fs = require('fs');


// const server = http.createServer(function (req, res) {

//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     var html = fs.readFileSync(__dirname + '/sampleBigFile.txt', 'utf8');
   
//     res.write(html)
//     res.end(" done")
//     // const readData=fs.createReadStream('./sampleBigFile.txt')
//     //     res.pipe(readData);
//     //     res.end('over')


// });





const server = http.createServer();
console.time("answer time");
server.on('request', (req, res) => {
const src = fs.createReadStream('./database-management-textbook.pdf');
    src.pipe(res);
    
});
server.listen(8000)

console.timeEnd("answer time");


