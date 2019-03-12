var mongoose = require('mongoose');

var School = mongoose.model('School', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    city: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
    country: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = { School };
