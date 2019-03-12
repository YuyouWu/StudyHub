var mongoose = require('mongoose');

var Vote = mongoose.model('Vote', {
  symbol: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  _creator: {
  	type: mongoose.Schema.Types.ObjectId,
  	required: true
  }
});

module.exports = {Vote};
