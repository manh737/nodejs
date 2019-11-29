const express = require('express');
const app = express();
const morgan = require('morgan');
const itemRoutes = require('./api/routes/items');
const bodyParse = require('body-parse');

app.use(morgan('dev'));
app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json());

app.use('/items', itemRoutes);

app.use((req, res, next) =>{
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;