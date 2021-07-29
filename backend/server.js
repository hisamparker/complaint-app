import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import connectDb from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import ticketRoutes from './routes/ticketRoutes.js'
import { notFound, errorHandler } from './middleware/handleErrors.js'
import cors from 'cors';

dotenv.config()

connectDb()

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// parse the cookies sent on the request object
app.use(cookieParser());

// we don't need this in dev but we will once we switch to production, we'll want to put the heroku origin instead though!
app.use(cors({
    origin: ['http://localhost:3000'],
    // allow browser to set cookies
    credentials: true
}))

app.get('/', (req, res) => {
    res.send('<h1>kitties</h1>')
})

app.use('/api/tickets', ticketRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on ${PORT}`))