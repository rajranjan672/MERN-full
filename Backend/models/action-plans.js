const mongoose = require('mongoose');

const actionPlanSchema = mongoose.Schema({
   
    title: {
        type: String,
    },
    email: {
        type: String,
    },
    category: {
        type: String,
    },
    method: {
        type: String,
    },
    startingDate : {
        type: String,
    },
    completionDate: {
        type: String,
    },
    description: {
        type: String,
    },
    photo: {
        type: String
    },
   
})

actionPlanSchema.set("timestamps", true);
const ActionPlanCollection = mongoose.model("actionPlan", actionPlanSchema);

module.exports = ActionPlanCollection;
