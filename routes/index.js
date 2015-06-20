var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/portrait', function(req, res, next) {
  res.render('portrait', {
    title: req.param('of'),
    image: req.param('of'),
    angle: req.param('angle') || '',
    scale: req.param('scale') || '',
    depth: req.param('depth') || '',
    background: req.param('background') || '',
    style: req.param('style') || '',
    palette: req.param('palette') || ''
  });
});

module.exports = router;
