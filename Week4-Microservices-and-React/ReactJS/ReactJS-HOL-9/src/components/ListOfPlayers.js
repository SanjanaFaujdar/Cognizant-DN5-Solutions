import React from 'react';

const players = [
  { name: "MS Dhoni", score: 85 },
  { name: "Virat Kohli", score: 95 },
  { name: "Rohit Sharma", score: 65 },
  { name: "KL Rahul", score: 55 },
  { name: "Hardik Pandya", score: 75 },
  { name: "Ravindra Jadeja", score: 60 },
  { name: "Jasprit Bumrah", score: 45 },
  { name: "Shubman Gill", score: 88 }
];

// Indian Team players
const IndianPlayers = [
  { name: "MS Dhoni", score: 85 },
  { name: "Virat Kohli", score: 95 },
  { name: "Rohit Sharma", score: 65 }
];

// Trophy players
const TZPlayers = [
  { name: "First Player", score: 90 },
  { name: "Second Player", score: 78 },
  { name: "Third Player", score: 55 }
];

const NavyTrophyPlayers = [
  { name: "Fourth Player", score: 88 },
  { name: "Fifth Player", score: 72 },
  { name: "Sixth Player", score: 61 }
];

function ListOfPlayers() {

  // 1a. map() - display all players
  const playerList = players.map((item) => (
    <li key={item.name}>
      <b>{item.name}</b> <span> - </span>
      <span>{item.score}</span>
    </li>
  ));

  // 1b. filter() - players with score less than 70
  const lowScorers = players
    .filter((item) => item.score < 70)
    .map((item) => (
      <li key={item.name}>
        <b>{item.name}</b> <span> - </span>
        <span>{item.score}</span>
      </li>
    ));

  // 2. Destructuring - Odd and Even players
  const [First, Second, Third, Fourth, Fifth, ...rest] = players;
  const OddPlayers  = [First, Third, Fifth];
  const EvenPlayers = [Second, Fourth];

  const oddList = OddPlayers.map((item) => (
    <li key={item.name}>{item.name}</li>
  ));

  const evenList = EvenPlayers.map((item) => (
    <li key={item.name}>{item.name}</li>
  ));

  // 3. Spread - merge TZPlayers and NavyTrophyPlayers with IndianPlayers
  const IndianPlayersMerged = [
    ...IndianPlayers,
    ...TZPlayers,
    ...NavyTrophyPlayers
  ];

  const mergedList = IndianPlayersMerged.map((item) => (
    <li key={item.name}>{item.name}</li>
  ));

  return (
    <div>
      {/* List of all players */}
      <h2>List of Players</h2>
      <ul>{playerList}</ul>

      {/* Filter - score less than 70 */}
      <h2>List of Players having Scores Less than 70</h2>
      <ul>{lowScorers}</ul>

      {/* Destructuring - Odd and Even */}
      <h2>Odd Players</h2>
      <ul>{oddList}</ul>

      <h2>Even Players</h2>
      <ul>{evenList}</ul>

      {/* Spread - Merged list */}
      <h2>List of Indian Players Merged:</h2>
      <ul>{mergedList}</ul>
    </div>
  );
}

export default ListOfPlayers;
