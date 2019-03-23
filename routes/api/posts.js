const express = require('express');
const router = express.Router();
const { Class } = require('../../models/Class');
const { Post } = require('../../models/Post');
const _ = require('lodash');

var { authenticate } = require('../../middleware/authenticate');

router.post('/add', authenticate, (req, res) => {
    var post = new Post({
        title: req.body.title,
        classID: req.body.classID,
        body: req.body.body,
        _creator: req.user._id
    });
    post.save().then(() => {
      res.status(200).send(post);
    }).catch((e) => {
      res.status(400).send(e);
    });
  });
  
module.exports = router;

