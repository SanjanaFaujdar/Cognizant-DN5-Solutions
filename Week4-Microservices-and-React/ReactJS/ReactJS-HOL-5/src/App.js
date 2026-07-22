import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div>
      <h1>Cohort Dashboard</h1>
      <CohortDetails
        name="Java FSE Batch 1"
        status="ongoing"
        startDate="01-Jan-2024"
        endDate="30-Jun-2024"
      />
      <CohortDetails
        name="React Batch 2"
        status="completed"
        startDate="01-Jul-2023"
        endDate="31-Dec-2023"
      />
    </div>
  );
}

export default App;
