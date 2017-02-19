const mongoose = require('mongoose')
const Schema = mongoose.Schema

var todoSchema = new Schema({
  title: String,
  content: String,
  done: Boolean
},{
  timestamps: true
});

var Todo = mongoose.model('Todos',todoSchema)

module.exports = Todo
