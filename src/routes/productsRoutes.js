const express = require('express');
const router = express.Router();
const { verifyToken } = require('../controllers/loginController');
// const { verifyToken } = require('./src/controllers/loginController');


const productsController = require('../controllers/productsController');

router.get('/', productsController.getAllProducts);
router.get('/:id',  productsController.getProductById);
router.post('/', verifyToken , productsController.createProduct);
router.put('/:id', verifyToken , productsController.updateProduct);
router.delete('/:id', verifyToken , productsController.deleteProduct);

module.exports = router;