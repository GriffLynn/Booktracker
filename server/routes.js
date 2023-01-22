const router = require('express').Router();
const controllers = require('./controllers.js');

router.get('/books', controllers.getAll);
router.post('/books', controllers.postBook);
router.put('/books/:id/read', controllers.putRead);
router.put('/books/:id/details', controllers.putDetails);
router.delete('/books/:id', controllers.deleteBook);

module.exports = router;