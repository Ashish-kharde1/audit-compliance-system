import axios from 'axios';

const API_BASE_URL = '/api';

export const auditTransaction = (transaction) => {
  return axios.post(`${API_BASE_URL}/audit`, transaction);
};

export const getAuditReport = () => {
  return axios.get(`${API_BASE_URL}/reports`);
};

export const getComplianceStatus = () => {
  return axios.get(`${API_BASE_URL}/compliance`);
};
