const router = require('express').Router();
const storeController = require('../../controllers/storeController');

//match to API books
router.route('/')
.get(storeController.findAll)
.post(storeController.create);

router
.route('/:id')
.get(storeController.findById)
.put(storeController.update)
.delete(storeController.remove);

module.exports = router;