import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [report, setReport] = useState(null);
  const [complianceStatus, setComplianceStatus] = useState(null);

  useEffect(() => {
    axios.get('/api/reports')
      .then(response => setReport(response.data))
      .catch(error => console.error('Error fetching report:', error));

    axios.get('/api/compliance')
      .then(response => setComplianceStatus(response.data))
      .catch(error => console.error('Error fetching compliance status:', error));
  }, []);

  return (
    <div>
      <h2>Audit Report</h2>
      <pre>{JSON.stringify(report, null, 2)}</pre>

      <h2>Compliance Status</h2>
      <pre>{JSON.stringify(complianceStatus, null, 2)}</pre>
    </div>
  );
};

export default Dashboard;
