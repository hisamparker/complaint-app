import Ticket from '../models/ticketModel.js'
import User from '../models/userModel.js'

// @DEC create new ticket
// @ROUTE POST /api/tickets
// @ACCESS ?
const addNewTicket = async( req, res ) => {
    try {
        const { user , title, priority, complaint  } = req.body.form
        console.log(req.body);
        const newTicket = new Ticket({
            user: user,
            title,
            priority,
            complaint
        })
        const savedTicket = await newTicket.save()
        
        res.status(201).json(savedTicket)
    } catch (err) {
        console.error(err.message);
        //send the status and the message
        res.status(500).send(`Server error`)
    }
}
// @DEC get ticket by id
// @ROUTE GET /api/tickets/:id
// @ACCESS ?
const getTicketById = async( req, res ) => {
    try {
        // populate to get user
        const ticket = await Ticket.findById(req.params.id).populate('user', 'name email')
        if(ticket) {
            res.status(201).json(ticket)
        } else {
            // bad request
            res.status(404)
            throw new Error(`Ticket not found`)
        }
    } catch (err) {
        console.error(err.message);
        //send the status and the message
        res.status(500).send(`Server error`)
    }
}

// @DEC get all tickets
// @ROUTE GET /api/tickets
// @ACCESS Private
const getTickets = async( req, res ) => {
    // get all the tickets and populate the user field as well so we get the name and email of the user who made the request
    const tickets = await Ticket.find({ }).populate('user', 'name email')
    res.json(tickets)
}

export { getTickets, getTicketById, addNewTicket }