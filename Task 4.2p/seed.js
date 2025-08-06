const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String
});

const Project = mongoose.model('Project', ProjectSchema);

const projects = [
  {
    title: "Kitten 4",
    image: "images/kitten-4.jpeg",
    link: "About Kitten 4",
    description: "Demo description about kitten 4"
  },
  {
    title: "Kitten 5",
    image: "images/kitten-5.jpeg",
    link: "About Kitten 5",
    description: "Demo description about kitten 5"
  }
];

Project.deleteMany({}).then(() => {
  Project.insertMany(projects)
    .then(() => {
      console.log("Multiple kitten cards saved!");
      mongoose.connection.close();
    })
    .catch((err) => {
      console.error("Error inserting cards:", err);
    });
});
