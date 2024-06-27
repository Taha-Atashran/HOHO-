import React from "react";

const GreenBlueSvg = ({ rotation }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="17"
        viewBox="0 0 17 19"
        fill="none"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <circle
          opacity="0.5"
          cx="9"
          cy="8"
          r="8"
          transform="rotate(-180 9 8)"
          fill="#0F9918"
        />
        <circle
          cx="4.5"
          cy="14.5"
          r="4"
          transform="rotate(-180 4.5 14.5)"
          fill="#00D4FC"
          fillOpacity="0.5"
          stroke="#FFFBF5"
        />
      </svg>
    </>
  );
};

export default GreenBlueSvg;
