import React, { useState } from "react";

function Errorr() {
  const [count, setcount] = useState(0);
  function inc() {
    setcount(count+1);
  }

  if (count === 3) {
    throw new Error("new error");
  }

  return (
    <div>
        <h3>11. Error Boundary Implementation:</h3>
        {count}
      <button type="button" onClick={inc}>
        inc
      </button>
    </div>
  );
}

export default Errorr;
