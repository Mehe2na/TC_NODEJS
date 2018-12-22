import express from 'express'
import { getUser,addUser,editUser,deleteUser } from '../controllers/userController'

const userRouter = express.Router()
userRouter.get('/users',getUser)
userRouter.post('/users',addUser)
userRouter.delete('/users',deleteUser)
userRouter.put('/users',editUser)

export default userRouter