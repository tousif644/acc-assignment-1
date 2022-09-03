const express = require("express");
const router = express.Router();

// controlller 
const userController = require("../../Controller/user.controller");

router.route('/random').get(userController.getRandomUser);
router.route('/all').get(userController.getAllUsers)
router.route('/save').post(userController.saveARandomUser)
router.route('/:id')
    .get(userController.getUserById)
    .delete(userController.deleteOneUser)
router.route('/update/:id').patch(userController.updateRandomUser)
router.route('/bulk-update/:id/:secondId/:thirdId').patch(userController.bulkUpdate)
module.exports = router