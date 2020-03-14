const router = require('express').Router();
const db = require('../../models');
const passport = require('../../config/passport');

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json(req.employee);
});

router.post('/signup', (req, res) => {
  db.employees.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    code: req.body.code,
  })
    .then((dbResponse) => {
      res.json(dbResponse);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.json('logout successful');
});

router.get('/user_data', (req, res) => {
  if (!req.user) {
    res.json({});
  } else {
    res.json({
      first_name: req.user.first_name,
      code: req.user.code,
    });
  }
});

module.exports = router;
