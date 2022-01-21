const express = require('express');

const { getBirds, patchAnzahl } = require('../controllers/birds.js');

const router = express.Router();

router.get('/birds', getBirds);

router.patch('/birds/:id', patchAnzahl);

module.exports = router;
