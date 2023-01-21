const router = require('express').Router();
const controllers = require('./controllers.js');

router.get('/books', controllers.getAll);
router.post('/books', controllers.postBook);
router.put('/books/:id', controllers.putRead);

module.exports = router;