// importing http module
const http = require("http");

// declaring port
const port = 8081;

const toDoList = ["Learn", "applyThings", "succed"];

http.createServer((req, res) => {
    const {method, url} = req;
    if(url === "/todos"){
        // GET Method
        if(method === "GET") {
            res.writeHead(200, {"content-type":"text/html"});
            res.write(toDoList.toString());
            res.end();
        }
        // POST Method
        else if(method === "POST") {
            let data = "";
            req.on("error", (err) => {
                console.log(err);
            }).on("data", (chunk) => {
                data += chunk;
                console.log("chunk: ", chunk);
            }).on("end", () => {
                data = JSON.parse(data);
                console.log("data: ", data);

                // add new element to the array using POST Method
                let newTodo = toDoList;
                // here in the POST body whatever the key-name we use, we've to use the same here eg. item
                newTodo.push(data.item);
            });
        } 
        // DELETE method
        else if(method === "DELETE") {
            let data = "";
            req.on("error", (err) => {
                console.log(err);
            }).on("data", (chunk) => {
                data += chunk;
            }).on("end", () => {
                data = JSON.parse(data);
                let deleteItem = data.item;
                console.log(deleteItem);
                // for(let i=0; i<toDoList.length; i++) {
                //     if(toDoList[i] === deleteItem) {
                //         toDoList.splice(i, 1);
                //         break;
                //     }
                // }
                toDoList.find((elem, index) => {
                    if(elem === deleteItem) {
                        toDoList.splice(index, 1);
                    } else {
                        console.error("Match not found !!");
                    }
                })
            });
        } else {
            res.writeHead(501);
        }
    } else {
        res.writeHead(404);
    }
    res.end();
})
//listening to the port
.listen(port, () => {
    console.log(`Node JS server started, running on port: ${port}`);
});