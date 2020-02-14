//library
const express = require("express");
// server instance
const app = express();

//callback funtion (non-blocking IO)
app.get("/", (req, res) => {
    const response = {
        message: " welcome to the thunderdome ",
        aboutMe: "My name is Marco Pedersen, i like to sleep"
    }
    res.send(response);

});
//port number
app.listen(3003, error => {
    if (error) {
        console.log("error running the server", error);
    }
    console.log("Server is running on port", 3003);
});





