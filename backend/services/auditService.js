const { runAuditModel, generateReport, getComplianceStatus } = require('../models/auditModel');

exports.auditTransaction = async (transaction) => {
  return await runAuditModel(transaction);
};

exports.generateAuditReport = async () => {
  return await generateReport();
};

exports.checkCompliance = async () => {
  return await getComplianceStatus();
};
