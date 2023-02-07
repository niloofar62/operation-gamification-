import React from "react";
import "./PeopleList.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import newCrown from "../assets/newCrown.png";

function PeopleList({ data }) {
  const people = data.map((person) => {
    let jewelsEarned = 0;
    const jewels = person.scores.filter((score) => score > 8);
    jewelsEarned = jewels.length;
    console.log(person.name, jewels);

    let images = [];
    while (jewelsEarned > 0) {
      if (jewelsEarned >= 5) {
        images.push(
          <img
            // src="path/to/five-or-more-jewels-image.png"
            //src links to image5
            className="crown"
            src={image5}
            alt="five or more jewels"
          />
        );
        jewelsEarned -= 5;
      } else if (jewelsEarned === 4) {
        images.push(
          //  <img src="path/to/four-jewels-image.png" alt="four jewels" />
          <img className="crown" src={image4} alt="four jewels" />
        );
        break;
      } else if (jewelsEarned === 3) {
        images.push(
          // <img src="path/to/three-jewels-image.png" alt="three jewels" />
          <img className="crown" src={image3} alt="three jewels" />
        );
        break;
      } else if (jewelsEarned === 2) {
        images.push(
          // <img src="path/to/two-jewels-image.png" alt="two jewels" />
          <img className="crown" src={image2} alt="two jewels" />
        );
        break;
      } else if (jewelsEarned === 1) {
        images.push(
          // <img src="path/to/zero-jewels-image.png" alt="zero jewels" />
          <img className="crown" src={image1} alt="one jewels" />
        );
        break;
      } else if (jewelsEarned === 0) {
        images.push(<img className="crown" src={newCrown} alt="zero jewels" />);
        break;
      }
    }
    return (
      <div className="person-container">
        <h2 className="name">{person.name}</h2>
        <div className="crowns">{images}</div>
      </div>
    );
  });

  return <div className="person-list">{people}</div>;
}

export default PeopleList;
// /////////////////////////////////////////////////////
// const crownMapping = [
//   { type: "hash", count: 5 },
//   { type: "tally", count: 1 },
// ];

// function tallyAndHash(jewelCount) {
//   let result = [];
//   for (const { type, count } of crownMapping) {
//     const crownCount = Math.floor(jewelCount / count);
//     result = result.concat(Array(crownCount).fill(type));
//     jewelCount -= crownCount * count;
//     if (jewelCount === 0) break;
//   }
//   return result;
// }

// const CrownDisplay = ({ jewelCount }) => {
//   const crowns = tallyAndHash(jewelCount);
//   const tallyCount = crowns.filter((crown) => crown === "tally").length;
//   const hashCount = crowns.filter((crown) => crown === "hash").length;

//   return (
//     <div>
//       {Array(hashCount)
//         .fill(0)
//         .map((_, i) => (
//           <img key={i} src={image5} alt="hash crown" />
//         ))}
//       {Array(tallyCount)
//         .fill(0)
//         .map((_, i) => (
//           <img key={i} src={image${4 - i}.png} alt="tally crown" />
//         ))}
//     </div>
//   );
// };

// const jewelCount = 24;

// const App = () => {
//   return (
//     <div>
//       <CrownDisplay jewelCount={jewelCount} />
//     </div>
//   );
// };

// export default App;

// // function PeopleList({ data }) {
// //   const people = data.map((person) => {
// //     let jewelsEarned = 0;
// //     const jewels = person.scores.filter((score) => score > 8);
// //     jewelsEarned = jewels.length;
// //     console.log(person.name, jewels);

// //     let jewel_count = jewelsEarned;
// //     let crown_array = [];

// //     while (jewel_count > 0) {
// //       //how many 5 jewel crowns?
// //       let five_jewel_crown_count = Math.floor(jewel_count / 5);
// //       jewel_count -= five_jewel_crown_count * 5;
// //       if (five_jewel_crown_count) {
// //         for (let i = 0; i < five_jewel_crown_count; i++) {
// //           crown_array.push("❤️");
// //         }
// //       }
// //       //is there a 4 jewel crowns?
// //       let four_jewel_crown_count = Math.floor(jewel_count / 4);
// //       jewel_count -= four_jewel_crown_count * 4;
// //       if (four_jewel_crown_count) {
// //         crown_array.push("😊");
// //       }
// //       //is there a 3 jewel crowns?
// //       let three_jewel_crown_count = Math.floor(jewel_count / 3);
// //       jewel_count -= three_jewel_crown_count * 3;
// //       if (three_jewel_crown_count) {
// //         crown_array.push("☀️");
// //       }
// //       //is there a 2 jewel crowns?
// //       let two_jewel_crown_count = Math.floor(jewel_count / 2);
// //       jewel_count -= two_jewel_crown_count * 2;
// //       if (two_jewel_crown_count) {
// //         crown_array.push("❄️");
// //       }
// //       // is there a 1 jewel crowns?
// //       let one_jewel_crowns = Math.floor(jewel_count / 1);
// //       jewel_count -= one_jewel_crowns * 1;
// //       if (one_jewel_crowns) {
// //         crown_array.push("⬆️");
// //       }
// //     }

// // return (
// //       <div className="person-container" key={person.id}>
// //         {Array.from({ length: jewelsEarned }).map(() => ":gem:")}
// //         {jewelsEarned >= 5 && (
// //           <div className="extra-crown">
// //             {Array.from({ length: Math.floor(jewelsEarned / 5) }, (_, i) => (
// //               <p key={i}>:crown:</p>
// //             ))}
// //           </div>
// //         )}
// //         <p className="crown">:crown:</p>
// //         <p className="name">{person.name}</p>
// //       </div>
// //     );
// //   });
// //   return <div className="people-list">{people}</div>;

// //     return (
// //       <div className="person-container" key={person.id}>
// //         {/* {crown_array.map((crown, index) => (
// //           <span key={index}>{crown}</span>
// //         ))} */}
// //         <p>Crowns: {crown_array.join("")}</p>
// //         <p className="name">{person.name}</p>
// //       </div>
// //     );
// //   });
// // }
// // export default PeopleList;
