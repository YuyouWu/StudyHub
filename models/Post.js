var mongoose = require('mongoose');

var Posts = mongoose.model('Posts', {
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    score: {
        type: Number,
        required = true
    }
});

module.exports = { Posts };
