var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});



router.post('/', function(req, res, next) {

var nname = req.body.nname;
var id = req.body.id;
var batch = req.body.batch;
var dept = req.body.dept;

console.log(nname + " " + id + " " +dept + " " + batch);
console.log("Entered to the Next page");

  res.render('index');
});

router.get('/nextpage', function(req, res, next) {
  res.render('next');
});



router.post('/nextpage', function(req, res, next) {

var email = req.body.email;
var pw = req.body.pw;
var nmb= req.body.nmb;
var gndr = req.body.gndr;

console.log(email + " " + pw + " " + nmb + " " + gndr);
console.log("Finished  Sucessfully ");

  res.render('next');
});



module.exports = router;
