const mongoose = require('mongoose');

// Book Schema
const userSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},

});

const User = module.exports = mongoose.model('User', userSchema);

// Get Books
module.exports.getUsers = (callback) => {
	User.find(callback);
}

// Get Book
module.exports.getUserById = (id, callback) => {
	User.findById(id, callback);
}

module.exports.getUser = (query, callback) => {
	User.findOne(query, callback);
}

// Add Book
module.exports.addUser = (user, callback) => {
	User.create(user, callback);
}

// Delete Book
module.exports.removeUser = (id, callback) => {
	var query = {_id: id};
	User.remove(query, callback);
}
