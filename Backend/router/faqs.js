const express = require('express');
const router = express.Router();
const FAQsController = require('../controllers/FAQs')

router.post(
    '/createFAQs',
    FAQsController.createFAQs
);

router.get(
    '/getFAQs',
    FAQsController.getFAQs
);

router.put('/updateFAQs',
    FAQsController.editFAQs
);

router.delete(
    "/deleteFAQs/:id", 
    FAQsController.deleteFAQs
);

module.exports = router;
