// server.js

const express = require("express");
const app = express();
const foodRoutes = require("./routes/food");

app.use(express.json());
app.get("/", (req, res) => {
  res.send("SIT 725. MVC Model testing.");
});

// Food routes
app.use("/food", foodRoutes);

app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
