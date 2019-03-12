const express = require('express');
const router = express.Router();
const { Vote } = require('../../models/Vote');
const _ = require('lodash');

var { authenticate } = require('../../middleware/authenticate');

//Get All Votes
router.get('/all', authenticate, (req, res) => {
    Vote.find().then((votes) => {
        res.send({ votes });
    }, (e) => {
        res.status(400).send(e);
    });
});

router.post('/add', authenticate, (req, res) => {
    var vote = new Vote({
        symbol: req.body.symbol,
        _creator: req.user._id
    });
    
    vote.save().then((doc)=>{
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});


module.exports = router;

