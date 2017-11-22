// Get dependencies
import express from 'express';
import path from 'path';
import http from 'http';
import bodyParser from 'body-parser';
import session from 'express-session';
// Get our API routes
import heroes from './models/heroes';
import signup from './models/signup';
import login from './models/login';

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//use sessions for tracking logins
app.use(session({
  secret: 'holy cow',
  resave: true,
  saveUninitialized: false
}));

//Router Middleware to Check if user has Session
function loggedIn(req, res, next) {
  if (req.session && req.session.userId) {
    return next();
  } else {
    var err = new Error('You must be logged in to view this page.');
    err.status = 401;
    return next(err);
  }
}

// Set api routes

app.use('/api', signup);
app.use('/api', login);

// Set protected routes
app.use('/api', loggedIn, heroes);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
