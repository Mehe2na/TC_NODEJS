const mongoose=require('mongoose')
const AdminsSchema=require('../models/Admin')

export const Admin =mongoose.model("Admin",AdminsSchema)

export const getAdmin = (req,res)=>{
		res.json({})
}
export const addAdmin = (req,res)=>{
		res.json({})
}
export const editAdmin = (req,res)=>{
    res.json({})
}
export const deleteAdmin = (req,res)=>{
    res.json({})
}