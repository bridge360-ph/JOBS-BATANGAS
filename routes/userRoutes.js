const express = require('express');
const { allUsers, singleUser, editUser, deleteUser } = require('../controllers/userController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const router = express.Router();

//user routes
//CRUD

//api for allUsers
router.get('/allusers', isAuthenticated, isAdmin, allUsers);
//api for single user
router.get('/user/:id', isAuthenticated, singleUser);
//api for edit user
router.put('/user/edit/:id', isAuthenticated, editUser);
//api for delete user
//Only admin can delete user
router.delete('/admin/user/delete/:id',  isAuthenticated, isAdmin, deleteUser);

module.exports = router;