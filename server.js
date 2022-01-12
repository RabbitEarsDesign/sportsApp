const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// Connect database
connectDB();

app.use(cors());

app.get("/", (req, res) => res.send("API running"));

// Define routes
app.use("/api/stats", require("./routes/api/stats"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
