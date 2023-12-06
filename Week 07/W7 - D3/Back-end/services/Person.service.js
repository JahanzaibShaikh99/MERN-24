
const personModel = require('../models/person.model');

async function addPerson(data) {
    return await personModel.create(data);
}
async function addManyPerson(data) {
    return await personModel.insertMany(data);
}
async function deletePerson(id) {
    const person = await personModel.findByIdAndDelete(id);
    console.log(person)
    if (!person) {
      return 'Person not found';
    }
  
    return 'Person removed successfully';
  }
  
async function deleteMany() {
     await personModel.deleteMany();
    return 'Persons removed successfully';
  }
async function getPersons() {
    return await personModel.find();
}
async function updatePerson(id,updateData) {
 const person = await personModel.findByIdAndUpdate(id, updateData);
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
