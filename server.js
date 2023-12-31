// importing http module
const http = require("http");

// declaring port
const port = 8081;

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write("<h2>Server Started</h2>");
    res.end();
}).listen(port, () => {
    console.log(`Node JS server started, running on port: ${port}`);
});