const express  = require('express');
const passport = require('passport');
const router   = express.Router();
const User     = require('../../models/user.model');
const bcrypt   = require('bcrypt');

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err) {
      res.status(500).json({ message: 'Something went wrong' });
      return;
    }
    if (!user) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(user, (err) => {
      if (err) {
        res.status(500).json({ message: 'Something went wrong' });
        return;
      }

      // We are now logged in (notice req.user)
      res.status(200).json(user);
    });
  })(req, res, next);
});

router.post('/signup', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const age = req.body.age;
  const city = req.body.city;
  const preferFish = req.body.preferFish;

  if (!username || !password) {
    res.status(400).json({ message: 'Provide username and password' });
    return;
  }

  User.findOne({ username }, (err, foundUser) => {
    if (foundUser) {
      res.status(400).json({ message: 'The username already exists' });
      return;
    }

    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const theUser = new User({
      username,
      password: hashPass,
      email,
      age,
      city,
      preferFish
    });
    console.log(theUser);
    theUser.save((err) => {
      if (err) {
        res.status(500).json({ message: 'Something went wrong' });
        return;
      }

      req.login(theUser, (err) => {
        if (err) {
          res.status(500).json({ message: 'Something went wrong' });
          return;
        }
        res.status(200).json(req.user);
      });
      });
    });
  });

router.get("/logout", function(req, res) {
  req.logout();
  res.status(200).json({ message: 'Success' });
});

router.get('/loggedin', (req, res, next) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: 'Unauthorized' });
});

router.get('/private', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.json({ message: 'OK, you are authenticated' });
    return;
  }
  res.status(403).json({ message: 'Unauthorized' });
});

module.exports = router;
