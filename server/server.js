// Get dependencies
import config from 'config';
import express from 'express';
import path from 'path';
import http from 'http';
import bodyParser from 'body-parser';
import session from 'express-session';
import expressValidator from 'express-validator';
import cors from 'cors';
// Get our API routes
import heroes from './models/heroes';
import authCheck from './models/authenticationCheck';
import signup from './models/signup';
import login from './models/login';
import forgotPassword from './models/forgotPassword'
import resetPassword from './models/resetPassword'
import testimonial from './models/testimonial';
import team from './models/team';

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cors(config.get('cors')));
// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist')));

app.use(session(config.get('session')));


//Router Middleware to Check if user has Session
function isMember(req, res, next) {
  if (req.session && req.session.userId) {
    return next();
  } else {
    var err = new Error('You must be logged in to view this page.');
    err.status = 401;
    return next(err);
  }
}

// Set api routes
app.use('/api', authCheck);
app.use('/api', signup);
app.use('/api', login);
app.use('/api', forgotPassword);
app.use('/api', resetPassword);

//Admin Routes
app.use('/api', testimonial);
app.use('/api', team);

// Set protected routes
//app.use('/api', loggedIn, heroes);

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
