const express = require('express');
const session = require('express-session');
const path = require('path');
const logger = require('morgan');
const passport = require('passport');
const bodyParser = require('body-parser');
// const aws = require('aws-sdk');
const db = require('./models');
const routes = require('./routes');
// require('dotenv').config(); // Configure dotenv to load in the .env file


const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'client/build')));

// Express boilerplate middleware
// =============================================
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Express session middleware
// =============================================
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// aws.config.update({
//   region: 'us-east-2', // Put your aws region here
//   accessKeyId: process.env.AWSAccessKeyId,
//   secretAccessKey: process.env.AWSSecretKey,
// });

// const S3_BUCKET = process.env.bucket;
// // Now lets export this function so we can call it from somewhere else
// exports.sign_s3 = (req, res) => {
//   const s3 = new aws.S3(); // Create a new instance of S3
//   const { fileName } = req.body;
//   const { fileType } = req.body;
//   // Set up the payload of what we are sending to the S3 api
//   const s3Params = {
//     Bucket: S3_BUCKET,
//     Key: fileName,
//     Expires: 500,
//     ContentType: fileType,
//     ACL: 'public-read',
//   };
//   // Make a request to the S3 API to get a signed URL which we can use to upload our file
//   s3.getSignedUrl('putObject', s3Params, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.json({ success: false, error: err });
//     }

//     const returnData = {
//       signedRequest: data,
//       url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
//     };
//     // Send it all back
//     res.json({ success: true, data: { returnData } });
//   });
// };


// Routing
// =============================================
app.use('/api', routes);

// Everything that is not an api request is sent to index.html
// for client side routing.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Sync sequelize models then start Express app
// =============================================
db.sequelize.sync({ force: false })
  .then(() => {
    console.log('\n*************************************');
    console.log(`${process.env.DB_NAME} database connected`);
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on PORT ${PORT}`);
      console.log('*************************************\n');
    });
  });
