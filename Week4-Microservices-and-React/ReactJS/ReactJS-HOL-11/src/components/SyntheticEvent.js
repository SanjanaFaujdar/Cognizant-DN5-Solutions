import React from 'react';

function SyntheticEvent() {
  const handlePress = (event) => {
    alert("I was clicked");
  }

  return (
    <div>
      <h2>Synthetic Event</h2>
      <button onMouseDown={handlePress}>
        Click Me (OnPress)
      </button>
    </div>
  );
}

export default SyntheticEvent;
