var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
const passportSetup = require('./utils/googleOauth');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/superAdmin');
var agentCoRouter = require('./routes/agentCo');
var porteurRouter = require('./routes/PorteurProject');
var categoryProjectRouter = require('./routes/CategoryProject');
var donatorRouter = require('./routes/Donator');
var projectRouter = require('./routes/project');
var donationRouter = require('./routes/Donation');
var nftRouter = require('./routes/nft');
var agentInvestorRouter = require('./routes/agentInvestor');
var categorInvestorRouter = require('./routes/CategoryInvestor')
var investorsRouter = require('./routes/Investors');
var app = express();

mongoose.connect("mongodb://localhost:27017/crowdonatedb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    console.log(`crowdonatedb database has been connected`);
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(
  cookieSession({
    name: "session",
    keys: ["cyberwolve"],
    maxAge: 24*60*60*100,
  })
);
app.use(passport.initialize());
app.use(passport.session());
 /*app.use(
   cors({
     origin: "http://localhost:3000",
     method: "GET,POST,DELETE,PUT",
     credientials: false,
   })
 );*/
app.use(
  cors()
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('uploads'));
app.use('/', indexRouter);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use('/users', usersRouter);
app.use('/admin',adminRouter);
app.use('/agent',agentCoRouter);
app.use('/porteur',porteurRouter);
app.use('/categoryproj',categoryProjectRouter);
app.use('/project',projectRouter);
app.use('/donator',donatorRouter);
app.use('/donation',donationRouter);
app.use('/nft',nftRouter);
app.use('/agentinvestor',agentInvestorRouter);
app.use('/categoryInv',categorInvestorRouter);
app.use('/investors',investorsRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;