const express = require("express");

const app = express();

app.get("/", ( req, res ) => {
    const response = {
        message: "Welcome to the second app attempt"
    }
    res.send(response);
});

app.listen(3001);