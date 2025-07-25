// This is for part 1 for future refrence, 
// const express = require('express');
// const app = express();
// const port = 3000;
// app.use(express.static('public'));
// app.get('/hello', (req, res) => {
//   res.send('Hello from NodeJS Express server!');
// });
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.get('/hello', (req, res) => {
  res.send('Hello from NodeJS Express server!');
});
app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send('Please provide valid numbers as query parameters, e.g. /add?num1=5&num2=10');
  }
  const sum = num1 + num2;
  res.send(`Sum of ${num1} and ${num2} is ${sum}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
