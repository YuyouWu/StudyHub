const express = require('express');
const router = express.Router();
const { User } = require('../../models/User');
const { Student } = require('../../models/Student');

const _ = require('lodash');

var { authenticate } = require('../../middleware/authenticate');

//api/users/test
router.get('/test', (req, res) => {
    res.json({
        msg: "Users Works"
    });
});

//api/users/register
router.post('/register', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);
    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        //creating student profile after user is created
        student = new Student({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            _creator: user._id
        });
        student.save().then(() => {
            res.header('x-auth', token).send(student);
        }).catch(e => {
            res.status(400).send(e);
        });
    }).catch((e) => {
        res.status(400).send(e);
    });
});

//User Login
router.post('/login', (req, res) => {
    var body = _.pick(req.body, ['username', 'password']);

    User.findByCredentials(body.username, body.password).then((user) => {
        return user.generateAuthToken().then((token) => {
            res.header('x-auth', token).send(user);
        });
    }).catch((e) => {
        res.status(400).send();
    });
});

//User Logout
router.delete('/logout', authenticate, (req, res) => {
    req.user.removeToken(req.token).then(() => {
        res.status(200).send();
    }, () => {
        res.status(400).send();
    });
});

//Get current user
router.get('/me', authenticate, (req, res) => {
    res.send(req.user);
});

module.exports = router;

