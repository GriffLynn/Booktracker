const router = require('express').Router();
const controllers = require('./controllers.js');

router.get('/books', controllers.getAll);
router.post('/add_book', controllers.postBook);
router.put('/update_read', controllers.putRead);

module.exports = router;