const express = require('express');
const passport = require('passport');

const router = express.Router();

// Google Authentication
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login/failure' }),
  (req, res) => {
    const user = req.user;
    res.redirect(
      `http://localhost:3000/dashboard?name=${encodeURIComponent(user.name)}&email=${encodeURIComponent(
        user.email
      )}&photo=${encodeURIComponent(user.photo)}`
    );
  }
);

// Microsoft Authentication
router.get('/microsoft', passport.authenticate('microsoft'));

router.get(
  '/microsoft/callback',
  passport.authenticate('microsoft', { failureRedirect: '/login/failure' }),
  (req, res) => {
    const user = req.user;
    res.redirect('http://localhost:3000/dashboard');
  }
);

// GitHub Authentication
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));

router.get(
  '/github/callback',
  passport.authenticate('github', { failureRedirect: '/login/failure' }),
  (req, res) => {
    const user = req.user;
    res.redirect('http://localhost:3000/dashboard');
  }
);

// LinkedIn Authentication
router.get('/linkedin', passport.authenticate('linkedin'));

router.get(
  '/linkedin/callback',
  passport.authenticate('linkedin', { failureRedirect: '/login/failure' }),
  (req, res) => {
    const user = req.user;
    res.redirect('http://localhost:3000/dashboard');
  }
);

// Success and Failure Routes
router.get('/login/success', (req, res) => {
  res.status(200).json({ message: 'Login successful', user: req.user });
});

router.get('/login/failure', (req, res) => {
  res.status(401).json({ message: 'Login failed' });
});

module.exports = router;
