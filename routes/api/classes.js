const express = require('express');
const router = express.Router();
const { Class } = require('../../models/Class');
const { User } = require('../../models/User');
const { Student } = require('../../models/Student');
const _ = require('lodash');

var { authenticate } = require('../../middleware/authenticate');

//Adding a school into database
router.post('/add', (req, res) => {
    var body = _.pick(req.body, ['name', 'number', 'school']);
    var schoolClass = new Class(body);
    schoolClass.save().then(() => {
        res.status(200).send(schoolClass);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

// Enrolling into a school for student
router.post('/enroll', authenticate, (req, res) => {
    var body = _.pick(req.body, ['schoolID']);
    Student.find({ _creator: req.user._id}).then((student) => {
        student.classes.push(body.schoolID);
    });
});

module.exports = router;

