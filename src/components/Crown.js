import React from "react";

function Crown(props) {
  return (
    <div>
      <p className="crown">👑</p>
      <h6>{props.housekeeperName}</h6>
    </div>
  );
}

export default Crown;
