import React from "react";
import "./PeopleList.css";
import five_jewel_crown from "../five_jewel_crown.svg";
import four_jewel_crown from "../four_jewel_crown.svg";
import three_jewel_crown from "../three_jewel_crown.svg";
import two_jewel_crown from "../two_jewel_crown.svg";
import one_jewel_crown from "../one_jewel_crown.svg";
import zero_jewel_crown from "../zero_jewel_crown.svg";
import newCrown from "../assets/newCrown.png";

function PeopleList({ data }) {
  const people = data.map((person) => {
    let jowelsEarned = 0;
    const jewels = person.scores.filter((score) => score > 8);
    jowelsEarned = jewels.length;
    console.log(person.name, jewels);

    let images = [];
    while (jowelsEarned >= 0) {
      if (jowelsEarned >= 5) {
        images.push(
          <img
            className="crown"
            src={five_jewel_crown}
            alt="crown with five jewels"
          />
        );
        jowelsEarned -= 5;
      } else if (jowelsEarned === 4) {
        images.push(
          <img
            className="crown"
            src={four_jewel_crown}
            alt="crown with four jewels"
          />
        );
        break;
      } else if (jowelsEarned === 3) {
        images.push(
          <img
            className="crown"
            src={three_jewel_crown}
            alt="crown with three jewels"
          />
        );
        break;
      } else if (jowelsEarned === 2) {
        images.push(
          <img
            className="crown"
            src={two_jewel_crown}
            alt="crown with two jewels"
          />
        );
        break;
      } else if (jowelsEarned === 1) {
        images.push(
          <img
            className="crown"
            src={one_jewel_crown}
            alt="crown with one jewel"
          />
        );
        break;
      } else if (jowelsEarned === 0) {
        images.push(
          <img
            className="crown"
            src={zero_jewel_crown}
            alt="zero jewel crown"
          />
        );
        break;
      }
    }

    return (
      <div className="person-container" key={person.id}>
        {images}
        {/* <p className="crown">👑</p> */}
        <p className="name">{person.name}</p>
      </div>
    );
  });

  return <div className="people-list">{people}</div>;
}

export default PeopleList;
