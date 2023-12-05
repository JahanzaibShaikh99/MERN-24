

const personService = require('../services/Person.service');

async function getHome(req, res) {
    try{
        res.status(200).json({message: "Welcome to the home page"});
    }catch(er) {
        res.status(500).json({message: "Error getting home page", error: er.message});
    }
}

async function addPerson(req, res) {
    const personData = req.body;
    try {
        const newPerson = await personService.addPerson(personData);
        res.status(201).json({ message : "Successfully inserted personData", person:newPerson});
    }catch(er){
        res.status(500).json({message: "Error creating person" , error: er.message});
    }
    
}
async function addManyPerson(req, res) {
    const personsData = req.body;
    try {
        const newPersons = await personService.addManyPerson(personsData);
        res.status(201).json({ message : "Successfully inserted personsData", person: newPersons});
    }catch(er){
        res.status(500).json({message: "Error creating person" , error: er.message});
    }
    
}

async function getPersons(req, res) {
    try{
        const persons = await personService.getPersons();
        res.status(201).json(persons);
    }catch(er) {
        res.status(500).json({message: "Persons not found ", error: er.message})
    }
    
}

async function deletePerson(req, res) {
    try {
        const personId = req.params.id;
        const deleteMessage = await personService.deletePerson(personId);
        res.status(200).json({message: deleteMessage});
    }catch(er) {
        res.status(500).json({message: "Error deleting person", error: er.message});
    }   
}


async function deleteMany(req, res) {
    try {
        const deleteMessage = await personService.deleteMany();
        res.status(200).json({message: deleteMessage});
    }catch(er) {
        res.status(500).json({message: "Error deleting person", error: er.message});
    }   
}
async function updatePerson(req, res) {
    try{
        const updateId = req.params.id;
        const updateData = req.body;
        const updateMessage = await personService.updatePerson(updateId, updateData);
        res.status(200).json({message: updateMessage});
    } catch(er){
        res.status(500).json({message: "Error updating person", error: er.message});
    }
}

module.exports = {
    getHome,
    addPerson,
    getPersons,
    deletePerson,
    deleteMany,
    updatePerson,
    addManyPerson
};
