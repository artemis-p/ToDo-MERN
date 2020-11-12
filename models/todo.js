const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo = > Schema allows you to define the fields stored in each document along with their validation requirements and default values.

const TodoSchema = new Schema({
    action: {
        type: String,
        required: [true, 'The todo text field is required']
    }
})

//create model for todo

const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;

