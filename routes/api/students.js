const express = require('express');
const router = express.Router();
const { School } = require('../../models/School');
const _ = require('lodash');

var { authenticate } = require('../../middleware/authenticate');

router.post('/add', (req, res) => {
    var body = _.pick(req.body, ['name', 'city', 'country']);
    var school = new School(body);
    school.save().then(() => {
        res.status(200).send(school);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

module.exports = router;

