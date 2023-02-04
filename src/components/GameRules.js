// import React, { useState, useEffect } from "react";

// const rules =
//   "Earn jewels to fill your crown! Each survey with a 9-10 Room Cleanliness = 1 jewel, 5 jewels = $25. Whoever has the most jewels at the end of each month will be named,THE QUEEN OF HOUSEKEEPING,And will win an additional $50!";
// const GameRules = () => {
//   const [value, setValue] = useState(rules);

//   const [height, setHeight] = useState("auto");

//   useEffect(() => {
//     setHeight(`${textareaRef.current.scrollHeight}px`);
//   }, [value]);

//   const textareaRef = React.createRef();

//   return (
//     <textarea
//       ref={textareaRef}
//       value={value}
//       onChange={(e) => setValue(e.target.value)}
//       style={{ height }}
//     />
//   );
// };

// export default GameRules;

import React, { useState, useEffect } from "react";

const rules =
  "Earn jewels to fill your crown! Each survey with a 9-10 Room Cleanliness = 1 jewel, 5 jewels = $25. Whoever has the most jewels at the end of each month will be named,THE QUEEN OF HouseKEEPING,And will win an additional $50!";

const GameRules = () => {
  const [value, setValue] = useState(rules);
  const [height, setHeight] = useState("auto");

  useEffect(() => {
    setHeight(`${textareaRef.current.scrollHeight}px`);
  }, [value]);

  const textareaRef = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue(event.target.rules.value);
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setValue(event.target.value);
  // };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        ref={textareaRef}
        name="rules"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ height: "200px" }}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default GameRules;
