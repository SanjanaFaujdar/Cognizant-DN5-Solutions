import React from 'react';
import CalculateScore from './components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        name="Sanjana"
        school="Cognizant Academy"
        total={450}
        goal={500}
      />
    </div>
  );
}

export default App;
