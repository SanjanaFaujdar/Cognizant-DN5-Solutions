import React from 'react';
import '../stylesheets/mystyle.css';

function CalculateScore(props) {
  const average = props.total / props.goal * 100;

  return (
    <div className="scoreCard">
      <h2>Student Score Calculator</h2>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>School:</strong> {props.school}</p>
      <p><strong>Total Score:</strong> {props.total}</p>
      <p><strong>Goal:</strong> {props.goal}</p>
      <p><strong>Average Score:</strong> {average.toFixed(2)}%</p>
    </div>
  );
}

export default CalculateScore;
