// routes/food.js

const express = require("express");
const router = express.Router();
const foodController = require("../controllers/foodController");

// Routes
router.get("/", foodController.getAllFood);
router.post("/", foodController.createFood);

module.exports = router;
