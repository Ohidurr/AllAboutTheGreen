const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const path = require('path');


const PORT = process.env.PORT;
const app = express();

const plantsRouter = require('./routes/Plants/plants')

app.use(express.static(path.resolve(__dirname, "./public")));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/plant-inquiries', plantsRouter);



app.use((err, req, res, next) => {
    console.log(err);
    if(err.status) {
        res.status(err.status).json(err)
    } else {
        res.status(500).json(err)
    }
    next(err)
})

app.listen(PORT, () => {
    console.log("Listening on port ", PORT);
})