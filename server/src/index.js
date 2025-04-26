const express = require("express");
require("dotenv").config();

const authRoutes = require("./routes/auth.route");
const postRoutes = require("./routes/post.route");
const categoryRoutes = require("./routes/category.route");

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/categories", categoryRoutes);

app.get("/ping", (req, res) => res.json({ message: "pong" }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
