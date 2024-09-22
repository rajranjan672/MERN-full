const ActionPlanCollection = require("../models/action-plans");

exports.createActionPlans = async( req, res, next) => {

    // var user = new UserCollection({
    //     title: req.body.title,
    //     startingDate: req.body.startingDate,
    //     description: req.body.description
       
    // });

    // try {
    //     doc = await user.save();
    //     return res.status(201).json(doc);
    // }
    // catch(err) {
    //     res.status(501).json(err)
    // }
     let response = [];

     const createActionPlan = new ActionPlanCollection({
        email: req.body.email,
        title:req.body.title,
        category: req.body.category,
        method: req.body.method,
        startingDate: req.body.startingDate,
        description: req.body.description
     });

     await createActionPlan.save((error, plans) => {
         if(error) {
             response = {success: false, message: "something went wrong"};
         } else {
             response =  success= true, plans= plans
         }
         return res.send(response)
     });
};




exports.getActionPlans = async (req, res, next) => {
    try {
        const plans = await ActionPlanCollection.find(); // Await the result

        if (!plans || plans.length === 0) {
            return res.status(404).json({ success: false, message: "No action plans found." });
        }

        return res.json({ success: true, data: plans }); // Send response only once
    } catch (error) {
        console.error(error); // Log the error for debugging
        // Ensure only one response is sent
        if (!res.headersSent) {
            return res.status(500).json({ success: false, message: "Something went wrong" });
        }
    }
};


exports.findbyid = async(req,res) => {
    const id = req.params.id
    const trimmed_id = id.trim()
    ActionPlanCollection.findById(trimmed_id)
    .then((result) => {
       try{ res.status(200).json({
            plans:result,
        }
        
        )}catch {
            res.status(404).json({message: "not found"})
        }
        

        
    })
}

exports.editActionPlans = async(req,res) => {
    var ap = {
        email: req.body.email,
        title:req.body.title,
        category: req.body.category,
        method: req.body.method,
        startingDate: req.body.startingDate,
        description: req.body.description

    };
    ActionPlanCollection.findByIdAndUpdate(req.params.id, {
        $set: ap}, {new: true}, (err, doc) => {
            if(!err) {res.send(doc);}
            else {
                console.log('Error in actionPlan Update: ', + JSON.stringify(err, undefined, 2));
            }
        });
};

exports.deleteActionPlan = async(req, res, next) => {
    
    ActionPlanCollection.findByIdAndDelete((req.params.id), (err, doc) => {
        if(!err) {
            res.send(doc);
        }
        else {
            console.log('error in delete: ' +JSON.stringify(err, undefined, 2));
        }
    })
}
