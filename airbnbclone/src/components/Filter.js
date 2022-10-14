import React from "react";

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <p>
        Filter results: <input value={value} onChange={onChange}></input>
      </p>
    </div>
  );
};

export default Filter;
