import React, { useState } from 'react';
import './SoilReport.css';

const SoilReport: React.FC = () => {
  // State to track the new soil report request data
  const [newRequest, setNewRequest] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });

  // State to track the soil report status
  const [reportStatus, setReportStatus] = useState<string | null>(null);
  const [requestId, setRequestId] = useState('');

  // Function to simulate checking report status
  const handleCheckReport = () => {
    if (requestId === '12345') {
      setReportStatus('ready');
    } else {
      setReportStatus('not ready');
    }
  };

  // Function to handle form submission for new soil report request
  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New Request Submitted: ', newRequest);
    // Here, you can send the data to the server or API to process the request
  };

  return (
    <div className="soil-report-container">
      {/* Panel for checking soil report status */}
      <div className="panel check-status-panel">
        <h2>Check Soil Report Status</h2>
        <div className="status-input">
          <input
            type="text"
            placeholder="Enter Request ID"
            value={requestId}
            onChange={(e) => setRequestId(e.target.value)}
          />
          <button onClick={handleCheckReport}>Check Status</button>
        </div>
        {reportStatus === 'ready' && (
          <div className="report-ready">
            <p>
              Your soil report is ready! <a href="#">Download Report</a>
            </p>
          </div>
        )}
        {reportStatus === 'not ready' && (
          <div className="report-not-ready">
            <p>Your soil report is not ready yet. Please check again later.</p>
          </div>
        )}
      </div>

      {/* Panel for requesting a new soil report */}
      <div className="panel new-request-panel">
        <h2>Request New Soil Report</h2>
        <form onSubmit={handleRequestSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={newRequest.name}
            onChange={(e) => setNewRequest({ ...newRequest, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={newRequest.email}
            onChange={(e) => setNewRequest({ ...newRequest, email: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            value={newRequest.phone}
            onChange={(e) => setNewRequest({ ...newRequest, phone: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Land Location Address"
            value={newRequest.location}
            onChange={(e) => setNewRequest({ ...newRequest, location: e.target.value })}
            required
          />
          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default SoilReport;
