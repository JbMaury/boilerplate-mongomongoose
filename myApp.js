const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [String],
});
let Person = mongoose.model("Person", personSchema);
const person = new Person({
  name: "Joachim",
  age: 39,
  favoriteFoods: ["poutine", "pizza", "spinach salad"],
});

const createAndSavePerson = (done) => {
  person.save((err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};
const arrayOfPeople = [
  {
    name: "Bernard",
    age: 87,
    favoriteFoods: ["mozzarella", "champagne", " poulet basquaise"],
  },
  {
    name: "Ticho",
    age: 21,
    favoriteFoods: ["kebab", "truite fumée", "salade de foies"],
  },
  {
    name: "Musgone",
    age: 46,
    favoriteFoods: ["sushi", "galettes", "poireaux à la crème"],
  },
];
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return console.log("error", err);
    done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, persons) => {
    if (err) return console.log(err);
    done(null, persons);
    console.log(persons);
  });
};
const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, person) => {
    if (err) return console.log(err);
    done(null, person);
    console.log(person);
  });
};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, person) => {
    if (err) return console.log(err);
    done(null, person);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, (err, person) => {
    if (err) return console.log(err);
    person.favoriteFoods.push(foodToAdd);
    person.save((err, data) => {
      if (err) return console.log(err);
      done(null, data);
    });
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
