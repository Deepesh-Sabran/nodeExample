// importing http module
const http = require("http");

// declaring port
const port = 8081;

const toDoList = ["Learn", " apply things", " succed"];

http.createServer((req, res) => {
    res.writeHead(200, {"content-type":"text/html"});
    res.write(toDoList.toString());
    res.end();
}).listen(port, () => {
    console.log(`Node JS server started, running on port: ${port}`);
});