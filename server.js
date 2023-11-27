// importing http module
const http = require("http");

// declaring port
const port = 8081;

// declare an array
const toDoList = ["Learn", " apply things", " Succed !!"];

http.createServer((req, res) => {
    const {method, url} = req;
    if(method === "GET") {
        res.writeHead(200, {"content-type":"text/html"});
        res.write(toDoList.toString());
        res.end();
    }
}).listen(port, () => {
    console.log(`Node JS server started, running on port: ${port}`);
});