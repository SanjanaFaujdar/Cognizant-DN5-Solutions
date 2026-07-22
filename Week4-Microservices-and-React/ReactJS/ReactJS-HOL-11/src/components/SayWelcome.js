import React from 'react';

function sayWelcome(message) {
  alert(message);
}

function SayWelcome() {
  return (
    <div>
      <h2>Say Welcome</h2>
      <button onClick={() => sayWelcome("welcome")}>
        Say Welcome
      </button>
    </div>
  );
}

export default SayWelcome;
