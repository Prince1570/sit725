// controllers/foodController.js

function getAllFood(req, res) {
  res.json({ message: "All food items fetched!" });
}

function createFood(req, res) {
  res.json({ message: "New food created!" });
}

module.exports = {
  getAllFood,
  createFood
};
