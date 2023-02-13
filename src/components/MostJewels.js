import React from "react";
import five_jewel_crown from "../five_jewel_crown.svg";
import four_jewel_crown from "../four_jewel_crown.svg";
import three_jewel_crown from "../three_jewel_crown.svg";
import two_jewel_crown from "../two_jewel_crown.svg";
import one_jewel_crown from "../one_jewel_crown.svg";
import zero_jewel_crown from "../zero_jewel_crown.svg";

function MostJewels({ data }) {
  const sortedData = data.sort((a, b) => {
    const aJewels = a.scores.filter((score) => score > 8).length;
    const bJewels = b.scores.filter((score) => score > 8).length;
    return bJewels - aJewels;
  });

  const personWithMostJewels = sortedData[0];
  let jewelsEarned = 0;
  const jewels = personWithMostJewels.scores.filter((score) => score > 8);
  jewelsEarned = jewels.length;

  let images = [];
  while (jewelsEarned >= 0) {
    if (jewelsEarned >= 5) {
      images.push(
        <img
          className="crown"
          src={five_jewel_crown}
          alt="crown with five jewels"
        />
      );
      jewelsEarned -= 5;
    } else if (jewelsEarned === 4) {
      images.push(
        <img
          className="crown"
          src={four_jewel_crown}
          alt="crown with four jewels"
        />
      );
      break;
    } else if (jewelsEarned === 3) {
      images.push(
        <img
          className="crown"
          src={three_jewel_crown}
          alt="crown with three jewels"
        />
      );
      break;
    } else if (jewelsEarned === 2) {
      images.push(
        <img
          className="crown"
          src={two_jewel_crown}
          alt="crown with two jewels"
        />
      );
      break;
    } else if (jewelsEarned === 1) {
      images.push(
        <img
          className="crown"
          src={one_jewel_crown}
          alt="crown with one jewel"
        />
      );
      break;
    } else if (jewelsEarned === 0) {
      images.push(
        <img className="crown" src={zero_jewel_crown} alt="zero jewel crown" />
      );
      break;
    }
  }

  return (
    <div className="person-container">
      {/* {images} */}
      <p className="name">🏰 Queen {personWithMostJewels.name} 🏰</p>
    </div>
  );
}

export default MostJewels;
