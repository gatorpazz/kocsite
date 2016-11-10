var express = require('express');
var router = express.Router();
var ctrlHome = require('../controllers/home');
var ctrlPast = require('../controllers/pastEvents');
var ctrlFuture = require('../controllers/futureEvents');
var ctrlContact = require('../controllers/contact');
var ctrlOfficers = require('../controllers/officers');

/* Homepage */
router.get('/', ctrlHome.home);
router.get('/pastEvents', ctrlPast.events);
router.get('/futureEvents', ctrlFuture.events);
router.get('/join', ctrlContact.contact);
router.get('/officers', ctrlOfficers.officers);

module.exports = router;
