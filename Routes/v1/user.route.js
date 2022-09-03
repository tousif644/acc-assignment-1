const express = require("express");
const router = express.Router();

// controlller 
const userController = require("../../Controller/user.controller");

router.route('/random').get(userController.getRandomUser);

/**
* @api {get} /tools All tools
* @apiDescription Get all the tools
* @apiPermission admin
*
* @apiHeader {String} Authorization   User's access token
*
* @apiParam  {Number{1-}}         [page=1]     List page
* @apiParam  {Number{1-100}}      [limit=10]  Users per page
*
* @apiSuccess {Object[]} all the tools.
*
* @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
* @apiError (Forbidden 403)     Forbidden     Only admins can access the data
*/

/**
* @api {post} /tools save a tool
* @apiDescription Save all the tools
* @apiPermission admin
*
* @apiHeader {String} Authorization   User's access token
*
* @apiParam  {Number{1-}}         [page=1]     List page
* @apiParam  {Number{1-100}}      [limit=10]  Users per page
*
* @apiSuccess {Object[]} all the tools.
*
* @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
* @apiError (Forbidden 403)     Forbidden     Only admins can access the data
*/
router.route('/all').get(userController.getAllUsers)
/**
 * @api {post} /tools save a tool
 * @apiDescription Save all the tools
 * @apiPermission admin
 *
 * @apiHeader {String} Authorization   User's access token
 *
 * @apiParam  {Number{1-}}         [page=1]     List page
 * @apiParam  {Number{1-100}}      [limit=10]  Users per page
 *
 * @apiSuccess {Object[]} all the tools.
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
 * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
 */
router.route('/save').post(userController.saveARandomUser) // gives you the random one data
router.route('/:id') // can get value by id 
    .get(userController.getUserById)
    .delete(userController.deleteOneUser) // delete api by id
router.route('/update/:id').patch(userController.updateRandomUser) // update user by id
router.route('/bulk-update/:id/:secondId/:thirdId').patch(userController.bulkUpdate) // update multiple user with id 
module.exports = router
