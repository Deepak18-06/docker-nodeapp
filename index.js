const express = require('express');
const app = express();


app.get('/', (req,res) => {
    console.log("hello from container")
    res.status(200).send("this is home page from container");
})


app.listen(8080, () => {
    console.log("server listening on port 8080")
})