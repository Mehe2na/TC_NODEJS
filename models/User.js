const mongoose = require('mongoose');
const Schema = mongoose.Schema;
export const UsersSchema = new Schema({
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
		type: String,
		default: 'Content is required'
    },
    created_date:{
		type: Date,
		default:Date.now
	}
});
