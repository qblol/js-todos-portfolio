const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const cors = require('cors');
app.use(cors());

const mongoose = require('mongoose');
// CHANGE TO YOUR DESIRE DATABASE
mongoose.connect('mongodb://localhost/todo');

// CHANGE TO YOUR DESIRE ROUTES
const todos = require('./routes/todos');
app.use('/api/todos', todos);

app.listen(3000);

module.exports = app;
