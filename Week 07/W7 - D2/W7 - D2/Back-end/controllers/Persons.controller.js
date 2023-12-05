const personsService = require("../services/Persons.service");

async function addPerson(req, res) {
  const personData = req.body;
  try {
    const newPerson = await personService.addPerson(personData);
    res
      .status(201)
      .json({ message: "Successfully inserted personData", person: newPerson });
  } catch (er) {
    res
      .status(500)
      .json({ message: "Error creating person", error: er.message });
  }
}

async function getPersons(req, res) {
  try {
    const persons = await personService.getPersons();
    res.status(201).json(persons);
  } catch (er) {
    res.status(500).json({ message: "Persons not found ", error: er.message });
  }
}

async function deletePerson(req, res) {
  try {
    const personId = req.params.id;
    const deleteMessage = await personService.deletePerson(personId);
    res.status(200).json({ message: deleteMessage });
  } catch (er) {
    res
      .status(500)
      .json({ message: "Error deleting person", error: er.message });
  }
}

async function updatePerson(req, res) {
  try {
    const updateId = req.params.id;
    const updateData = req.body;
    const updateMessage = await personService.updatePerson(
      updateId,
      updateData
    );
    res.status(200).json({ message: updateMessage });
  } catch (er) {
    res
      .status(500)
      .json({ message: "Error updating person", error: er.message });
  }
}

module.exports = {
  addPerson,
  getPersons,
  deletePerson,
  updatePerson,
};
