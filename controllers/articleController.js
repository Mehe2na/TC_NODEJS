import mongoose from 'mongoose'
import ArticlesSchema from '../models/Article'

export const Article =mongoose.model("Article",ArticlesSchema)

export const addArticle = (req,res)=>{
		res.json({})
	}
export const getArticle = (req,res)=>{
		res.json({})
	}
export const editArticle = (req,res)=>{
		res.json({})
	}
export const deleteArticle = (req,res)=>{
		res.json({})
	}