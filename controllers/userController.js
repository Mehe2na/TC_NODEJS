const mongoose=require('mongoose')
const UsersSchema=require('../models/User')

export const User =mongoose.model("User",UsersSchema)

export const getUser = (req,res)=>{
		res.json({})
}
export const addUser = (req,res)=>{
		res.json({})
}
export const editUser = (req,res)=>{
    res.json({})
}
export const deleteUser = (req,res)=>{
    res.json({})
}