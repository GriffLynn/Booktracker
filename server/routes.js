const router = require('express').Router();
const controllers = require('./controllers.js');

router.get('/books', controllers.getAll);
router.post('/books', controllers.postBook);
router.put('/books/:id/read', controllers.putRead);
router.put('/books/:id/note', controllers.putNote);

module.exports = router;