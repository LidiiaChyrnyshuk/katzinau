const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/cats", require("./routes/cats"));
app.use("/api/users", require("./routes/users"));

app.get("/", (req, res) => {
	res.send("Backend works 🚀");
});

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		console.log("Mongo connected");

		app.listen(process.env.PORT || 5000, () => {
			console.log("Server running");
		});
	})
	.catch((err) => {
		console.error(err);
	});
