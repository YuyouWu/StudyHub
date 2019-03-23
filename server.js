const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');

//API route
const users = require('./routes/api/users');
const schools = require('./routes/api/schools');
const classes = require('./routes/api/classes');
const posts = require('./routes/api/posts');

const { mongoose } = require('./db/mongoose');
const { ObjectID } = require('mongodb');
mongoose.set('useCreateIndex', true);

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var PORT = process.env.PORT || 5000;

// app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/", (req, res) => {
    res.send('Hello');
});

app.use('/api/users', users);
app.use('/api/schools', schools);
app.use('/api/classes', classes);
app.use('/api/posts', posts);


// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

app.listen(PORT, () => {
    console.log('Express listening on port ' + PORT + '!');
});
  