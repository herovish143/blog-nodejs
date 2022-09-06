const express = require('express');
const bodyParser = require('body-parser');
const { rootPath } = require('./utils/pathHelper');
const userRouter = require('./routes/userRoutes');

const app = express();

console.log(rootPath);

app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());



app.use('users', userRouter);



module.exports = app;