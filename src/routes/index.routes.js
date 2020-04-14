const { Router } = require('express');
const router = Router();

const { renderIndex, renderAbout} = require('../controllers/index.controller.js');

router.get('/', renderIndex);
router.get('/about', renderAbout);

module.exports = router;