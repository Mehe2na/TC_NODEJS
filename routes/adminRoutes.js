import express from 'express'
import { getAdmin,addAdmin,editAdmin,deleteAdmin } from '../controllers/adminController'

const adminRouter = express.Router()

adminRouter.get('/admins',getAdmin)
adminRouter.post('/admins',addAdmin)
adminRouter.delete('/admins',deleteAdmin)
adminRouter.put('/admins',editAdmin)

export default adminRouter 