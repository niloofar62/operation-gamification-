import React from "react";
import "./PeopleList.css";
import five_jewel_crown from "../five_jewel_crown.svg";

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
            // src="path/to/five-or-more-jowels-image.png"
            // src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/066/351/original/5jewelCrown.png?1675786668"
            src={five_jewel_crown}
            alt="five or more jowels"
          />
        );
        jowelsEarned -= 5;
      } else if (jowelsEarned === 4) {
        images.push(
          //  <img src="path/to/four-jowels-image.png" alt="four jowels" />
          <img
            src="https://adad18.slack.com/files/U03SXQ4J8LD/F04NUEHP2QG/4_jewel_crown.svg"
            alt="four jowels"
          />
        );
        break;
      } else if (jowelsEarned === 3) {
        images.push(
          // <img src="path/to/three-jowels-image.png" alt="three jowels" />
          <img
            src="https://adad18.slack.com/files/U03SXQ4J8LD/F04N77X5DV2/3_jewel_crown.svg"
            alt="three jowels"
          />
        );
        break;
      } else if (jowelsEarned === 2) {
        images.push(
          // <img src="path/to/two-jowels-image.png" alt="two jowels" />
          <img
            src="https://adad18.slack.com/files/U03SXQ4J8LD/F04NUEHS62C/2_jewel_crown.svg"
            alt="two jowels"
          />
        );
        break;
      } else if (jowelsEarned === 1) {
        images.push(
          // <img src="path/to/zero-jowels-image.png" alt="zero jowels" />
          <img
            src="https://adad18.slack.com/files/U03SXQ4J8LD/F04NHCX73S5/1_jewel_crown.svg"
            alt="one jowels"
          />
        );
        break;
      } else if (jowelsEarned === 0) {
        images.push(
          <img
            src="https://adad18.slack.com/files/U03SXQ4J8LD/F04NHCX73S5/1_jewel_crown.svg"
            alt="zero jowels"
          />
        );
        break;
      }
    }

    return (
      <div className="person-container" key={person.id}>
        {images}
        <p className="crown">👑</p>
        <p className="name">{person.name}</p>
      </div>
    );
  });

  return <div className="people-list">{people}</div>;
}

export default PeopleList;
