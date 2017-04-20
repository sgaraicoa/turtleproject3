const router = require('express').Router();

router.use('/', require('./controllers/cocktails'));

module.exports = router;
