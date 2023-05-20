import axios from 'axios';
import React from 'react';

const { useState } = React;

export default function ReportButton({ id }) {
  const [reported, setReported] = useState(false);
  const handleReport = () => {
    if (!reported) {
      axios.put(`/reviews/${id}/report`);
      setReported(true);
    }
  };
  return (
    <button type="button" className="report-review" aria-label="report review" onClick={handleReport}>
      {reported ? 'Reported' : 'Report'}
    </button>
  );
}
