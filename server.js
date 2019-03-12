const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');

const users = require('./routes/api/users');

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

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

app.listen(PORT, () => {
    console.log('Express listening on port ' + PORT + '!');
});
  