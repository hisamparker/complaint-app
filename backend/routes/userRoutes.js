import express from 'express'
import verifyUser from '../middleware/verifyUser.js'
import { getAllUsers, registerUser, logginUser, isLoggedIn, logoutUser } from '../controllers/userController.js'
const router = express.Router()

router.route('/').post(registerUser).get(getAllUsers)
router.route('/login').post(logginUser).get(verifyUser, isLoggedIn)
router.route('/logout').post(logoutUser)

export default router