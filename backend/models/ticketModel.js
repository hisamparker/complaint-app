import mongoose from 'mongoose'


const ticketSchema = mongoose.Schema(
  {
    user: {
        // we use the objectId to see who's review
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        // we reference the User model when checking the objectId
        ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    priority: {
      type: Number,
      required: true,
    },
    complaint: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Ticket = mongoose.model('Ticket', ticketSchema)

export default Ticket
