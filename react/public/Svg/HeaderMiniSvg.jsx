import React from "react";

const HeaderMiniSvg = ({ rotation }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 49 52"
        fill="none"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <circle opacity="0.5" cx="23.75" cy="28.25" r="23.75" fill="#CA05D1" />
        <path
          d="M38.5938 19.8437C43.7887 19.8437 48 15.6324 48 10.4375C48 5.24257 43.7887 1.03125 38.5938 1.03125C33.3988 1.03125 29.1875 5.24257 29.1875 10.4375C29.1875 15.6324 33.3988 19.8437 38.5938 19.8437Z"
          fill="#00D4FC"
          fillOpacity="0.5"
          stroke="#FFFBF5"
        />
      </svg>
    </>
  );
};

export default HeaderMiniSvg;
