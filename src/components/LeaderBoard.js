import React from "react";

function LeaderBoard(props) {
  return (
    <div>
      <h1 className="leader-board-title">
        1st Place Housekeeper Name Here: {props.name}
      </h1>
      <h6>{props.average}</h6>
    </div>
  );
}

export default LeaderBoard;
