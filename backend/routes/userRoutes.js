import express from 'express'
import { getAllUsers, registerUser } from '../controllers/userController.js'
const router = express.Router()

router.route('/').post(registerUser).get(getAllUsers)

export default router