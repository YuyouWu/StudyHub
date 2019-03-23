var mongoose = require('mongoose');

var Post = mongoose.model('Post', {
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    body: {
        type: String
    },
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    classID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    score: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = { Post };
