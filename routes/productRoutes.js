const express = require('express');
const {
  getAll,
  getById,
  create,
  update,
  deleteProduct
} = require('../controllers/productController');

const router = express.Router();
router.get('/', getAll);

router.get('/:id', getById);

router.post('/', create);

router.patch('/:id', update);


router.delete('/:id', deleteProduct);

module.exports = router;
