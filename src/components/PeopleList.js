import React from "react";

function PeopleList({ data }) {
  const people = data.map((person) => {
    let jowelsEarned = 0;
    const jewels = person.scores.filter((score) => score > 8);
    jowelsEarned = jewels.length;
    console.log(person.name, jewels);

    return (
      <div className="person-container" key={person.id}>
        {Array.from({ length: jowelsEarned }).map(() => "💎")}
        {/* {jowelsEarned > 0 && <p className="jowel">💎</p>} */}
        {/* {jowelsEarned >= 5 && <p className="extra-crown">👑</p>} */}
        {jowelsEarned >= 5 && (
          <div className="extra-crown">
            {Array.from({ length: Math.floor(jowelsEarned / 5) }, (_, i) => (
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
