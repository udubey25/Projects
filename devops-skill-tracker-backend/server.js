const express = require('express');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const MicrosoftStrategy = require('passport-microsoft').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'default_secret',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Passport Strategies
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

passport.use(
  new MicrosoftStrategy(
    {
      clientID: process.env.MICROSOFT_CLIENT_ID,
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
      callbackURL: '/auth/microsoft/callback',
      scope: ['user.read'],
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: '/auth/github/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

passport.use(
  new LinkedInStrategy(
    {
      clientID: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      callbackURL: '/auth/linkedin/callback',
      scope: ['r_emailaddress', 'r_liteprofile'],
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

// Serialize and Deserialize User
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Authentication Backend!');
});

// Local Signup and Login Routes
app.post('/local/signup', (req, res) => {
  const { email, password } = req.body;
  // Simulate user signup logic
  res.status(200).json({ message: 'User signed up successfully' });
});

app.post('/local/login', (req, res) => {
  const { email, password } = req.body;
  // Simulate user login logic
  res.status(200).json({ message: 'User logged in successfully' });
});

// OAuth Routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google', {
  failureRedirect: '/login/failure',
}), (req, res) => {
  const user = req.user;
  res.redirect(`http://localhost:3000/dashboard?name=${encodeURIComponent(user.name.givenName)}&email=${encodeURIComponent(user.emails[0].value)}&photo=${encodeURIComponent(user.photos[0].value)}`);
});



app.get('/auth/microsoft', passport.authenticate('microsoft'));

app.get(
  '/auth/microsoft/callback',
  passport.authenticate('microsoft', {
    successRedirect: '/login/success',
    failureRedirect: '/login/failure',
  })
);

app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

app.get(
  '/auth/github/callback',
  passport.authenticate('github', {
    successRedirect: '/login/success',
    failureRedirect: '/login/failure',
  })
);

app.get('/auth/linkedin', passport.authenticate('linkedin'));

app.get(
  '/auth/linkedin/callback',
  passport.authenticate('linkedin', {
    successRedirect: '/login/success',
    failureRedirect: '/login/failure',
  })
);

// Success and Failure Routes
app.get('/login/success', (req, res) => {
  res.status(200).json({ message: 'Login successful', user: req.user });
});

app.get('/login/failure', (req, res) => {
  res.status(401).json({ message: 'Login failed' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
