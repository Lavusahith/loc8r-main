var express = require('express');
var router = express.Router();

var ctrllocations = require('../controllers/locations.js');
var ctrlothers = require('../controllers/others.js');

router.get('/signin',ctrlothers.signin);
/* GET Locations page. */
router.get('/',ctrllocations.homelist);
router.get('/locations',ctrllocations.locationInfo);
router.get('/locations/review/new',ctrllocations.addReview);
/* get others page */
router.get('/about',ctrlothers.about);
router.get('/register',ctrlothers.register);
module.exports=router;
