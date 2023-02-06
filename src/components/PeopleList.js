import React from "react";
import "./PeopleList.css";

function PeopleList({ data }) {
  const people = data.map((person) => {
    let jewelsEarned = 0;
    const jewels = person.scores.filter((score) => score > 8);
    jewelsEarned = jewels.length;
    console.log(person.name, jewels);

    return (
      <div className="person-container" key={person.id}>
        {Array.from({ length: jewelsEarned }).map(() => "💎")}
        {/* {jewelsEarned > 0 && <p className="jowel">💎</p>} */}
        {/* {jewelsEarned >= 5 && <p className="extra-crown">👑</p>} */}
        {jewelsEarned >= 5 && (
          <div className="extra-crown">
            {Array.from({ length: Math.floor(jewelsEarned / 5) }, (_, i) => (
              <p key={i}>👑</p>
            ))}
          </div>
        )}
        <p className="crown">👑</p>
        <p className="name">{person.name}</p>
      </div>
    );
  });

  return <div className="people-list">{people}</div>;
}

export default PeopleList;
