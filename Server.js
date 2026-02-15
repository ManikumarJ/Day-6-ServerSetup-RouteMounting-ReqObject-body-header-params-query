import express from 'express'
import dotenv from 'dotenv'
import authRoute from './routes/authRoute.js'
import cors from 'cors'

const app = express();

dotenv.config()

app.use(cors())
app.use(express.json())

app.use("/api/users", authRoute)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`SERVER IS ON : http://localhost:${PORT}`);
})
