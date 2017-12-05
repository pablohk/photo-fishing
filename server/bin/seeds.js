require('dotenv').config();

const mongoose = require('mongoose');
const User = require('../models/user.model');
const Thread = require('../models/thread.model');
const Reply = require('../models/reply.model');

const dbURL = process.env.dbURL;
mongoose.connect(dbURL,{useMongoClient: true});

const user =
  {
    username: "user1",
    email: "1@1",
    password: "1"
  };

//User.collection.drop();
//Thread.collection.drop();
//Reply.collection.drop();

//User.create(user);
//Reply.create(reply);
//Thread.create(thread);
