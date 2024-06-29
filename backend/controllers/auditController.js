const { auditTransaction, generateAuditReport, checkCompliance } = require('../services/auditService');

exports.auditTransaction = async (req, res) => {
  const transaction = req.body;
  const result = await auditTransaction(transaction);
  res.json(result);
};

exports.generateReport = async (req, res) => {
  const report = await generateAuditReport();
  res.json(report);
};

exports.checkCompliance = async (req, res) => {
  const complianceStatus = await checkCompliance();
  res.json(complianceStatus);
};
