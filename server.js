// importing http module
const express = require("express");

// we need to initialize express
const app = express();
// after initializing we need to use that particular app
app.use(express.json());    //we use  .json because, we are declaring our express is totaly in json format

// declaring port
const port = 8081;

const toDoList = ["Jay", "Shree", "Ram"];

// creating server (req, res) & checking URL togather
// get method
app.get("/todos", (req, res) => {
    res.status(200).send(toDoList.toString());
});

// post method
app.post("/todos", (req, res) => {
    let newItem = req.body.item;
    toDoList.push(newItem);
    res.status(201).send({message: "Task added successfully"});
});

// delete method
app.delete("/todos", (req, res) => {
    const deleteItem = req.body.item;
    toDoList.find((elem, index) => {
        if(elem === deleteItem) {
            toDoList.splice(index, 1);
        }
    });
    res.status(202).send({message: "item deleted"});
});

// all method
app.all("*", (req, res) => {
    res.status(501).send({message: "check your URL"});
});

// Listening to the port
app.listen(port, () => {
    console.log(`Server startedd via Express & running on port: ${port}`);
});