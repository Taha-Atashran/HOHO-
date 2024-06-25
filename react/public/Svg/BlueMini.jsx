import React from "react";

const BlueMini = ({ rotation }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="20"
        viewBox="0 0 19 20"
        fill="none"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <circle cx="9" cy="11" r="9" fill="#00D4FC" fillOpacity="0.5" />
        <circle
          cx="14.5"
          cy="4.5"
          r="4"
          fill="#CA05D1"
          fillOpacity="0.5"
          stroke="#FFFBF5"
        />
      </svg>
    </>
  );
};

export default BlueMini;
