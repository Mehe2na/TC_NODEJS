import mongoose from 'mongoose'
const Schema = mongoose.Schema;
export const AdminsSchema = new Schema({
	FirstName: {
		type: String,
		required: 'Title is required'
	},
	LastName: {
		type: String,
		required: 'Author is required'
	},
	Email: {
		type: String,
		required: 'Content is required'
	},
	PhoneNumber: {
		type: Date,
		required: 'Content is required'
    },
    created_date:{
		type: Date,
		default:Date.now
	}
    
});
