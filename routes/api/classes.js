const express = require('express');
const router = express.Router();
const { Class } = require('../../models/Class');
const { User } = require('../../models/User');
const { Student } = require('../../models/Student');
const _ = require('lodash');
const { ObjectID } = require('mongodb');

var { authenticate } = require('../../middleware/authenticate');

//Adding a class into database
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
  var body = _.pick(req.body, ['classID']);
  Student.findOne({ _creator: req.user._id }).then((student) => {
    student.classes.push(body.classID);
    student.save().then(() => {
      res.status(200).send(student);
    }).catch(e => {
      res.status(400).send(e);
    });
  });
});

// Get list of classes from student
router.get('/get', authenticate, (req, res) => {
  Student.findOne({ _creator: req.user._id }).then((student)=> {
    res.status(200).send(student.classes);
  }).catch(e => {
    res.status(400).send(e);
  })
});

//Get a class from database
router.get('/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Class.findById(id).then((data) => {
    if (!data) {
      return res.status(404).send();
    }

    res.send({ data });
  }).catch((e) => {
    res.status(400).send();
  });
});

module.exports = router;

