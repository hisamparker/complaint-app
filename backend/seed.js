import mongoose from 'mongoose'
import dotenv from 'dotenv'
import tickets from './data/tickets.js'
import users from './data/users.js'
import Ticket from './models/ticketModel.js'
import User from './models/userModel.js'


dotenv.config()

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(
            process.env.MONGO_URI, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false
            }
        )
        // logging the connection host from the connect object returned when we call mongoose.connect 
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`)
        // we need to exit the process if there's an error, passing one says 'exit with failure'
        process.exit(1)
    }
}


connectDb()

const importData = async () => {
    try {
        // clear everything from db
        await Ticket.deleteMany()
        await User.deleteMany()

        const testUsers = await User.insertMany(users)
        console.log(testUsers);

        const testUser = testUsers[0]._id

        const testUserTickets = tickets.map( ticket => {
            return {...ticket, user: testUser}
        })

        await Ticket.insertMany(testUserTickets)

        console.log(`Data imported to DB`)
        process.exit()
    } catch (err) {
        console.error(`${err}`)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        // clear everything from db
        await Ticket.deleteMany()
        await User.deleteMany()

        console.log(`Data destroyed to DB`)
        process.exit()
    } catch (err) {
        console.error(`${err}`)
        process.exit(1)
    }
}

// old friend process.argv! if the command at index 2 is -d, then call destroyData, else call import (we make a script in package.json)
if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}