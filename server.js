const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const app = express();
const morgan = require('morgan');

connectDB();

// //HTTPS redirect middleware
// function ensureSecure(req, res, next) {
//   //Heroku stores the origin protocol in a header variable. The app itself is isolated within the dyno and all request objects have an HTTP protocol.
//   if (req.get('X-Forwarded-Proto') == 'https' || req.hostname == 'localhost') {
//     // Don't do anything if the req is comming from https or localhost
//     next();
//   } else if (
//     req.get('X-Forwarded-Proto') != 'https' &&
//     req.get('X-Forwarded-Port') != '443'
//   ) {
//     //Redirect if not HTTP with original request URL
//     res.redirect('https://' + req.hostname + req.url);
//   }
// }

// app.use('/', ensureSecure);

app.use(express.json());
app.use(morgan('combined'));
app.use(cors());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/assignments', require('./routes/assignments'));
app.use('/api/grades', require('./routes/grades'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/resources', require('./routes/resources'));
app.use('/api/videos', require('./routes/videos'));
app.use('/api/images', require('./routes/images'));
app.use('/api/resumes', require('./routes/resumes'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
