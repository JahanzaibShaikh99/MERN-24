const mongoose = require('mongoose');

const projectEntrySchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: [true, "Please enter the project name"],
    },
    startDate: {
        type: Date,
        required: [true, "Please enter the start date"],
        validate: {
            validator: function (value) {
                return value <= new Date();
            },
            message: "Start date must be in the past or today",
        },
    },
    endDate: {
        type: Date,
        validate: {
            validator: function (value) {
                return value >= this.startDate;
            },
            message: "End data must be after the start date",
        },
    },
    projectManager: {
        type: String,
        required: [true, "Please enter the project manager's name"],
    },
    teamMembers: {
        type: [String],
        validate: {
            validator: function (value) {
                return value.length > 0;
            },
            message: "Please add at least one team member",
        },
    },
    status: {
        type: String,
        enum: ['Planning', 'In Progress', 'Completed'],
        default: 'Planning',
    },
});

const projectEntryModel = mongoose.model('projectEntry', projectEntrySchema);

module.exports = projectEntryModel;
