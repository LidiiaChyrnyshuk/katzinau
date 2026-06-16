const express = require("express");
const router = express.Router();

const Cat = require("../models/Cat");

router.get("/", async (req, res) => {
	const cats = await Cat.find();

	res.json(cats);
});

router.post("/", async (req, res) => {
	const cat = await Cat.create(req.body);

	res.json(cat);
});

router.put("/:id", async (req, res) => {
	const cat = await Cat.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});

	res.json(cat);
});

router.delete("/:id", async (req, res) => {
	await Cat.findByIdAndDelete(req.params.id);

	res.json({ success: true });
});

module.exports = router;