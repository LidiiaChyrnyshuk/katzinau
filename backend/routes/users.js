const express = require("express");
const router = express.Router();

const User = require("../models/User");

// всі користувачі
router.get("/", async (req, res) => {
	try {
		const users = await User.find();

		res.json(users);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
});

// один користувач
router.get("/:id", async (req, res) => {
	try {
		const user = await User.findById(req.params.id);

		if (!user) {
			return res.status(404).json({
				message: "User not found",
			});
		}

		res.json(user);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
});

// створити
router.post("/", async (req, res) => {
	try {
		const user = await User.create(req.body);

		res.status(201).json(user);
	} catch (error) {
		res.status(400).json({
			message: error.message,
		});
	}
});

// оновити
router.put("/:id", async (req, res) => {
	try {
		const user = await User.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});

		res.json(user);
	} catch (error) {
		res.status(400).json({
			message: error.message,
		});
	}
});

// видалити
router.delete("/:id", async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id);

		res.json({
			success: true,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
});

module.exports = router;
