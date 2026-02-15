import express from 'express'
import { CreateUser } from '../controllers/userController.js'

const route = express.Router()

route.post('/userdata', CreateUser)

export default route
