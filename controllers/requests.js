var express = require('express');
var router = express.Router();
var utils = require("./dbUtils");

// Register new user
router.post("/app/user/new", function(req, res){
  console.log("REGISTER");
  console.log(req.body);
  utils.registerUser(req.body, function(out){
    res.send(out);
  });
});

router.post("/app/user/login", function(req, res){
  console.log("LOGIN");
  console.log(req.body);
  utils.loginUser(req.body, function(out){
    res.send(out);
  });
});

router.post("/app/medics", function(req, res){
  utils.getMedics(function(out){
    res.send(out);
  });
});


module.exports = router;