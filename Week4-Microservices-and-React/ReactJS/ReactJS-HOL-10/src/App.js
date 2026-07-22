import React from 'react';

function App() {
  const officeSpaces = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "WeWork", Rent: 75000, Address: "Mumbai" },
    { Name: "Regus", Rent: 45000, Address: "Bangalore" }
  ];

  const element = "Office Space";
  const jsxall = (
    <img src="office.jpg" width="25%" height="25%" alt="Office Space" />
  );

  return (
    <div>
      <h1>Office Space, at Affordable Range</h1>
      {jsxall}

      {officeSpaces.map((ItemName) => {
        let colors = [];
        if (ItemName.Rent <= 60000) {
          colors.push('textRed');
        } else {
          colors.push('textGreen');
        }

        const rentStyle = {
          color: ItemName.Rent < 60000 ? 'red' : 'green'
        };

        return (
          <div key={ItemName.Name}>
            <h1>Name: {ItemName.Name}</h1>
            <h3 style={rentStyle}>Rent: Rs. {ItemName.Rent}</h3>
            <h3>Address: {ItemName.Address}</h3>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
