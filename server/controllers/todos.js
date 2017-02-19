const express = require('express');
const Todo = require('../models/todo');

module.exports = {
  getTodos: function(req,res){
    Todo.find()
    .then(function(data){
      res.json(data)
    })
  },
  getTodo: function(req,res){
    Todo.find({_id:req.params.id})
    .then(function(data){
      res.json(data)
    })
  },
  createTodo: function(req,res){
    let newTodo = new Todo({
      title: req.body.title,
      content: req.body.content,
      done: false
    })
    newTodo.save()
    .then(function(data){
      res.json(data)
    })
  },
  editTodo: function(req,res){
    Todo.findOneAndUpdate({_id:req.params.id},{
      title: req.body.title,
      content: req.body.content
    },{new: true})
    .then(function(data){
      res.json(data)
    })
  },
  doneTodo: function(req,res){
    Todo.findOneAndUpdate({_id:req.params.id},{done: true},{new: true})
    .then(function(data){
      res.json(data)
    })
  },
  undoneTodo: function(req,res){
    Todo.findOneAndUpdate({_id:req.params.id},{done: false},{new: true})
    .then(function(data){
      res.json(data)
    })
  },
  deleteTodo: function(req,res){
    Todo.findOneAndRemove({_id: req.params.id})
    .then(function(data){
      res.send('Todo Deleted')
    })
  }
}
