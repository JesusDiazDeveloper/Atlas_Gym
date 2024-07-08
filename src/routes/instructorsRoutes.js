const express = require('express');
const router = express.Router();
const { verifyToken } = require('../controllers/loginController');

const instructorsController = require('../controllers/instructorsController');

router.get('/', instructorsController.getAllInstructors);
router.get('/:id', instructorsController.getInstructorById);
router.post('/', verifyToken , instructorsController.createInstructor);
router.put('/:id', verifyToken , instructorsController.updateInstructor);
router.delete('/:id', verifyToken , instructorsController.deleteInstructor);

module.exports = router;