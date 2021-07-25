import mongoose from 'mongoose'

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

export default connectDb