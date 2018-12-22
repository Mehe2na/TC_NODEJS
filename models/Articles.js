const mongoose=require('mongoose')

const Schema=mongoose.Schema

export const ArticlesSchema = new Schema({
	title:{
		type:String,
		required: 'Title is required'
	},
	autgor:{
		type:String,
		required: 'Author is required'
	},
	content:{
		type:String,
		required: 'Content is required'
	},
	created_date:{
		type: Date,
		default:Date.now
	}
})