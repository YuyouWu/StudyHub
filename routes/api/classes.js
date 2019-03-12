const express = require('express');
const router = express.Router();
const { Class } = require('../../models/Class');
const _ = require('lodash');

var { authenticate } = require('../../middleware/authenticate');

router.post('/add', (req, res) => {
    var body = _.pick(req.body, ['name', 'number', 'school']);
    var schoolClass = new Class(body);
    schoolClass.save().then(() => {
        res.status(200).send(schoolClass);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

module.exports = router;

