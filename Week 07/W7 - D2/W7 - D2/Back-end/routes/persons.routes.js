const express = require("express");
const router = express.Router();
const personsController = require("../app/controllers/persons.controller");
router.post("/persons", personsController.addPerson);
router.delete("/persons", personsController.removePerson);
router.patch("/persons", personsController.updatePerson);
module.exports = router;
