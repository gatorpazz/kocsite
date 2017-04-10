var express = require('express');
var router = express.Router();
var ctrlHome = require('../controllers/home');
var ctrlPhotos = require('../controllers/photos');
var ctrlUpcoming = require('../controllers/upcomingEvents');
var ctrlContact = require('../controllers/contact');
var ctrlOfficers = require('../controllers/officers');

/* Homepage */
router.get('/', ctrlHome.home);
router.get('/photos', ctrlPhotos.photos);
router.get('/upcomingEvents', ctrlUpcoming.events);
router.get('/join', ctrlContact.contact);
router.get('/officers', ctrlOfficers.officers);

module.exports = router;
