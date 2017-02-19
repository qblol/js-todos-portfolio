const express = require('express');
const router = express.Router();

const controllers = require('../controllers/todos');

router.get('/', controllers.getTodos);
router.get('/:id', controllers.getTodo);
router.post('/', controllers.createTodo);
router.put('/:id', controllers.editTodo);
router.put('/:id/done', controllers.doneTodo);
router.put('/:id/undone', controllers.undoneTodo);
router.delete('/:id', controllers.deleteTodo);

module.exports = router;
