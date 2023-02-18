const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'give the name man'],
        trim: true,
        maxLength: [20, `pls don't do that bigass task`]
    },
    completed:{
        type: Boolean,
        default: false
    }
});



module.exports = mongoose.model('Task', TaskSchema); 