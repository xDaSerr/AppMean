const router = require('express').Router();

router.use('/songs', require('./api/songs')); // ojo sin espacios

module.exports = router;
