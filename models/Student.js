var mongoose = require('mongoose');

var Student = mongoose.model('Student', {
    firstName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
    school: {
        type: mongoose.Schema.Types.ObjectId
    },
    classes: {
        type: Array
    },
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

module.exports = { Student };
