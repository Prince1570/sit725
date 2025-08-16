const foodItems = [
  { id: 1, name: "South Indian", description: "A variety of dishes from the southern regions of India, known for their use of rice and lentils." },
  { id: 2, name: "Gujarati", description: "A cuisine from the western state of Gujarat, featuring vegetarian dishes with a blend of sweet, salty, and spicy flavors." },
  { id: 3, name: "Punjabi", description: "Rich and hearty dishes from the northern state of Punjab, often featuring dairy products and robust spices." },
  { id: 4, name: "Bengali", description: "Known for its fish dishes and sweets, Bengali cuisine hails from the eastern state of West Bengal." },
  { id: 7, name: "Rajasthani", description: "Known for its spicy and flavorful dishes, Rajasthani cuisine often includes lentils, vegetables, and dairy." },
];

function getAllFood() {
  return foodItems;
}

module.exports = {
  getAllFood,
};