const express  = require('express');
const passport = require('passport');
const router   = express.Router();
const User     = require('../../models/user.model');
const bcrypt   = require('bcrypt');
const isObjIdValid=require('../../utils/isObjIdValid');
const loggedIn = require('../../utils/isAuthenticated');
/*
  Middleware for retrieve all data of User
*/

const retrieveData = (req)=>{
  const data ={
    username:req.body.username,
    password:req.body.password,
    email:req.body.email,
    age:req.body.age,
    city:req.body.city,
    preferFish:req.body.preferFish
  }
  return data;
}

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

  let newObj =retrieveData(req);

  if (!newObj.username || !newObj.password) {
    res.status(400).json({ message: 'Provide username and password' });
    return;
  }

  User.findOne( {username:newObj.username} , (err, foundUser) => {
    if (foundUser) {
      res.status(400).json({ message: 'The username already exists' });
      return;
    }

    const salt     = bcrypt.genSaltSync(10);
    //const hashPass = bcrypt.hashSync(newObj.password, salt);
     newObj.password = bcrypt.hashSync(newObj.password, salt);
       console.log(newObj.password);
     const theUser =new User(newObj);

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
  req.session.destroy();
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

/*
  Edit a User
*/
router.put('/edit',  loggedIn,(req,res,next)=>{
  const updateObj = retrieveData(req);
  User.findOne( {username:updateObj.username} , (err, foundUser) => {
    if (foundUser) {
      res.status(400).json({ message: 'The username already exists' });
      return;
    }
    User.findByIdAndUpdate(req.user._id,updateObj,{new:true})
      .then(item=>res.status(200).json(item))
      .catch( (err)=> res.status(500).json(err))
  });

});

module.exports = router;
