const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const jobRoutes = require('./routes/jobRoutes');
const config = require('./production');

const app = express();

app.use(bodyParser.json());
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
})

app.use(authRoutes);
app.use(jobRoutes);

app.use( (error,req,res,next) => {
    return res.status(error.statusCode).json(error);
});

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

mongoose
    .connect(config.MONGO_URL)
    .then( () => app.listen(process.env.PORT || 8000))
    .catch(err => console.log(err));

