const express = require('express');
const { auditTransaction, generateReport, checkCompliance } = require('../controllers/auditController');
const router = express.Router();

router.post('/audit', auditTransaction);
router.get('/reports', generateReport);
router.get('/compliance', checkCompliance);

module.exports = router;
