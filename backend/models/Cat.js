const mongoose = require("mongoose");
const catSchema = new mongoose.Schema({
	name: String,
	age: String,
	img: String,
	description: String,

	ownerId: String,

	owner: {
		name: String,
		bio: String,
	},

	stats: {
		likes: {
			type: Number,
			default: 0,
		},
		dislikes: {
			type: Number,
			default: 0,
		},
		superLikes: {
			type: Number,
			default: 0,
		},
	},
});

module.exports = mongoose.model("Cat", catSchema);