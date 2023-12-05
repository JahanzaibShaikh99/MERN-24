const personsModel = require("../models/persons.model");

async function addPersons(data) {
  return await personsModel.create(data);
}
async function deletePersons(id) {
  const persons = await personsModel.findByIdAndDeledte(id);
  if (!persons) {
    return "Person Not Found";
  }
  return "Person removed Successfully";
}
async function updatePersons(id, updated) {
  const persons = await personsModel.findByIdAndUpdate(id, updated);
  if (!persons) {
    return "Person Not Found";
  }
  return "Person updated Successfully";
}
