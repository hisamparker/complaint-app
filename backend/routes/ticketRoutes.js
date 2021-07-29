import express from 'express'
const router = express.Router()
import { getTickets, getTicketById, addNewTicket } from '../controllers/ticketController.js'
import verifyUser from '../middleware/verifyUser.js'

router.route('/').get(getTickets).post(addNewTicket)

router.route('/:id').get(getTicketById)

export default router