import React from "react";
import { useState } from "react";

const Count = () => {
  const [value, setValue] = useState(1);

  function handleAdd() {
    if (value >= -1) setValue(value + 1);
  }

  function handleReduce() {
    if (value > 0) {
      setValue(value - 1);
      return;
    }
  }

  return (
    <div className="count">
      <button className="plus" onClick={() => handleReduce()}>
        -
      </button>
      {value}
      <button onClick={() => handleAdd()}> + </button>
    </div>
  );
};

export default Count;
