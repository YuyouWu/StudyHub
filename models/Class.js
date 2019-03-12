var mongoose = require('mongoose');

var Class = mongoose.model('Class', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    number: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    }, 
    school: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
});

module.exports = { Class };
