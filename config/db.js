const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    if (process.env.NODE_ENV === 'production') {
      const username = process.env.MLAB_USERNAME_WEBDEV;
      const password = process.env.MLAB_PASSWORD_WEBDEV;
      let connectionString = 'mongodb+srv://' + username + ':' + password + db;
      await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      });
      console.log('MongoDB Connected');
    } else {
      await mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      });
    }

    // const username = process.env.MLAB_USERNAME_WEBDEV;
    // const password = process.env.MLAB_PASSWORD_WEBDEV;
    // let connectionString =
    //   'mongodb://' +
    //   'admin' +
    //   ':' +
    //   'cliff92711' +
    //   '@ds259210.mlab.com:59210/heroku_90kxmhrc';

    // await mongoose.connect(connectionString, {
    //   useNewUrlParser: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    //   useUnifiedTopology: true
    // });
    // console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
