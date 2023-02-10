import React, { useState, useEffect } from "react";

const rules =
  "Earn jewels to fill your crown! Each survey with a 9-10 Room Cleanliness = 1 jewel, 5 jewels = $25. Whoever has the most jewels at the end of each month will be named,THE QUEEN OF HouseKEEPING,And will win an additional $50!";

const GameRules = ({ rules_data, onSubmit }) => {
  const [value, setValue] = useState(rules_data);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          name="rules"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ height: "200px" }}
        />
        <button type="submit">Update</button>
      </form>
      <p>{value}</p>
    </div>
  );
};

export default GameRules;
