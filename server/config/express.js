require('dotenv').config();
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require("mongoose");
const passport = require('passport');
const configure    = require('./passport');
const cors = require('cors');
const corsConfig = require('./cors.config');
const debug = require('debug');

module.exports = (app) => {

  // Mongoose configuration
  const dbURL = process.env.dbURL;
  mongoose.connect(dbURL)
    .then(() => {debug(`Conected to ${dbURL}`);});


  app.use(cors(corsConfig));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(cookieParser());

  app.use(session({
    secret: 'Okay, proyect-3 & Pablo',
    resave: true,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 2419200000
      },
    store: new MongoStore({mongooseConnection: mongoose.connection})
  }));



  app.use(passport.initialize());
  app.use(passport.session());

  app.use((req,res,next) => {
    res.locals.title = "Photo Fisher";
    res.locals.user = req.user;
    next();
  });


};
