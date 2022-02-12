require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

const start = async () => {
    try {
        app.listen(port, () => 
            console.log(`Server listening to port ${port}...`)
        )
    } catch (error) {
        console.log(error);
    }
};

start();