const express = require('express');
const router = express.Router();
const HandlerApi = require('./handlerApi.js');

router.all('/*', (req, res, next) => {
  var API = new HandlerApi();
  req.API = API;
  next();
});

router.post('/users', (req, res) => {
  req.API.signUpUser(
    req.body.email,
    req.body.password,
    req.body.passwordConfirmation,
    req.body.fullName,
    req.API
  ).then((result) => {
    console.log('I have sent', result, 'back to client');
    res.send(result);
  });
});

router.post('/auth/jwt', (req, res) => {
  debugger;
  req.API.verifyJwt(
    req.body.token
  ).then(function(response) {
    if (response.status) {
      debugger;
      req.API.fetchUser(response.data.uid).then(function(response) {
        debugger;
        res.send({status: 200, user: response})
      })
    } else {
      res.send({status: 0})
    }
  })
});

router.post('/applications', (req, res) => {
  req.API.newApplication(
    req.body.name,
    req.body.description,
    req.body.url
  ).then((result) => {
    res.send(result);
  });
});

router.post('/auth', (req, res) => {
  debugger;
  req.API.signInUser(
    req.body.email,
    req.body.password,
    req.API
  ).then((result) => {
    debugger;
    res.send(result);
  });
});

module.exports = router;
