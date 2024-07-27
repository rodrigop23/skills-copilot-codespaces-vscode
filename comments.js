// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const commentsPath = path.join(__dirname, 'comments.json');
const comments = require(commentsPath);

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  fs.writeFile(commentsPath, JSON.stringify(comments, null, 2), (err) => {
    if (err) {
      res.status(500).send('An error occurred');
    } else {
      res.json(newComment);
    }
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});