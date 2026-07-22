import React from 'react';
import Counter from './components/Counter';
import SayWelcome from './components/SayWelcome';
import CurrencyConvertor from './components/CurrencyConvertor';
import SyntheticEvent from './components/SyntheticEvent';

function App() {
  return (
    <div>
      <h1>Event Examples App</h1>
      <hr />
      <Counter />
      <hr />
      <SayWelcome />
      <hr />
      <CurrencyConvertor />
      <hr />
      <SyntheticEvent />
    </div>
  );
}

export default App;
