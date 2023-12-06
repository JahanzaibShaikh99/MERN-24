
const personsModel = require('../models/persons.model');

async function addPerson(data) {
    return await personsModel.create(data);
}
async function addManyPerson(data) {
    return await personsModel.insertMany(data);
}
async function deletePerson(id) {
    const person = await personsModel.findByIdAndDelete(id);
    console.log(person)
    if (!person) {
      return 'Person not found';
    }
  
    return 'Person removed successfully';
  }
  
async function deleteMany() {
     await personsModel.deleteMany();
    return 'Persons removed successfully';
  }
async function getPersons() {
    return await personsModel.find();
}
async function updatePerson(id,updateData) {
 const person = await personsModel.findByIdAndUpdate(id, updateData);
    if (!person) {
        return 'Person not found';
    }
    return 'Data is updated';
}
module.exports = {
    addPerson,
    deletePerson,
    deleteMany,
    getPersons,
    updatePerson,
    addManyPerson    
    
};
