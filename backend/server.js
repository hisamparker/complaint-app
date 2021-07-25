import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

connectDb()

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on ${PORT}`.rainbow))