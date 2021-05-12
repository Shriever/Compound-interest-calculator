import React from "react";

interface props {
  total: number;
}

const Value = ({ total }: props) => {
  return (
    <div>
      <h2>{total}</h2>
    </div>
  );
};

export default Value;
