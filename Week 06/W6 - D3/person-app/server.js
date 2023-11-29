const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

connectDatabase().catch((err) => console.log(err));

async function connectDatabase() {
  await mongoose
    .connect(
      "mongodb+srv://Jahanzaib:root@cluster0.qbcuyzg.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("database is connected");
    });
}
const app = express();
app.use(cors());
app.use(express.json());
const router = express.Router();
app.use(router);
// Person
const Person = new mongoose.Schema({
  id: Number,
  name: {
    type: String,
    required: [true, "Please enter a name: "],
    minLength: [1],
    maxLength: [4, "Name is too lengthy"],
  },
  age: {
    type: Number,
    min: [3, "Person is not allowed under the age of three: "],
  },
  city: String,
});

const PersonModel = mongoose.model("Persons", Person);
// Movies

const Movie = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Plese Enter a Movie Name"],
  },
  minAge: {
    type: Number,
  },
  maxAge: {
    type: Number,
  },
  category: {
    type: String,
  },
});

const MovieModel = mongoose.model("Movies", Movie);

// Person get Route
router.get("/person", async (req, res) => {
  const person = await PersonModel.find({}, { __v: 0 });
  res.json(person);
});

// Person Post Route
router.post("/person", async (req, res) => {
  console.log(req.body);
  const { id, name, age, city } = req.body;
  const personCreated = new PersonModel({
    id: id,
    name: name,
    age: age,
    city: city,
  });
  if (!name || !age || !city) {
    res.status(401).json({
      success: false,
      message: "Please enter complete Data",
    });
  } else {
    const personCreated = new PersonModel({
      id: id,
      name: name,
      age: age,
      city: city,
    });
    personCreated.save();
    res.json(personCreated);
  }
  personCreated.save();
  res.json(personCreated);
});

// Person Patch Route
router.patch("/person/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age, city } = req.body;
  try {
    const updatedPerson = await PersonModel.findOneAndUpdate(
      { id: id },
      { name: name, age: age, city: city },
      { new: true }
    );

    if (!updatedPerson) {
      return res.status(404).json({ message: "Person not found" });
    }

    res.json(updatedPerson);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
// Delete the Person by ID
router.delete("/person/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPerson = await PersonModel.findOneAndDelete({ _id: id });

    if (!deletedPerson) {
      return res.status(404).json({ message: "Person not found" });
    }

    res.json({ message: "Person deleted successfully", deletedPerson });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Movie get Route
router.get("/movie", async (req, res) => {
  const movie = await MovieModel.find({}, { __v: 0 });
  res.json(movie);
});

// Movie post Route
router.post("/movie", async (req, res) => {
  console.log(req.body);
  const { name, minAge, maxAge, category } = req.body;
  const movieCreated = new PersonModel({
    name: name,
    minAge: minAge,
    maxAge: maxAge,
    category: category,
  });
  movieCreated.save();
  res.json(movieCreated);
});

// Movie Patch Route
router.patch("/movie/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age, city } = req.body;
  try {
    const updatedMovie = await MovieModel.findOneAndUpdate(
      { id: id },
      { name: name, age: age, city: city },
      { new: true }
    );

    if (!updatedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json(updatedMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// Delete Movie by ID
router.delete("/movie/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMovie = await MovieModel.findOneAndDelete({ _id: id });

    if (!deletedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json({ message: "Movie deleted successfully", deletedMovie });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

// router.post("/person/many", async (req, res) => {
//   const {people} = req.body;
//   const peopleCreated await PersonModel.insertMany(people);
//   res.json(person);
// });

router.all("/", (req, res) => {
  res.json({
    message: "we are live 🚀🎄🎄🚀",
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(clear);
  console.log("server started 🚀🎄🎄🚀");
});
