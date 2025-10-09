const express = require("express");
const router = express.Router();
const calendlyController = require("../../controller/calendlyController");

// Define routes
router.get('/me', calendlyController.getMe);
router.get('/event-types', calendlyController.getEventTypes);
router.get('/slots', calendlyController.getSlots);
// router.post('/schedule', calendlyController.scheduleMeeting);

router.post('/create-link', calendlyController.createSchedulingLink);
router.post('/webhook', express.json({ type: 'application/json' }), calendlyController.handleWebhook);

module.exports = router;
