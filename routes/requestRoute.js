import express from 'express'
import { addData, getdatabyheader, getdatabynum, getdatabyquery } from '../controllers/requestController.js'

const route = express.Router()

// http://localhost:5000/api/request/userdata
// http://localhost:5000/api/request/getdatabynum/100000
// http://localhost:5000/api/request/getdatabyquery
// http://localhost:5000/api/request/getdatabyheader



route.post('/userdata', addData)
route.get('/getdatabynum/:useridbynumber',getdatabynum)
route.get('/getdatabyquery',getdatabyquery)
route.get('/getdatabyheader',getdatabyheader)


export default route
