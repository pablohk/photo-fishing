// const multer = require('multer');
// const path = require('path');
//
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//   //  cb(null, './public/uploads/');
//     cb(null, './uploads/');
//
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}${path.extname(file.originalname)}`)
//   }
// });
//
// const upload   = multer({ storage });
// module.exports = upload;

const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const express = require('express');
const multer = require('multer');
const app = express();

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: '',
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(undefined, 'my-file-name');
  }
});

const parser = multer({ storage: storage });

app.post('/upload', parser.array('images', 10), function (req, res) {
  console.log(req.files);
});

const upload   = multer({ storage });
module.exports = upload;
