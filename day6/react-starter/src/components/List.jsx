import React from "react";

const ListExample = () => {
  const items = ["cat", "dog", "cat", "rat"];
  return (
    <div>
      <h2>My Skills</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListExample;