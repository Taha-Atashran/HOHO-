const OrangeSvg = ({ rotation }) => {
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
        <circle opacity="0.5" cx="8.99976" cy="11" r="9" fill="#CD0404" />
        <circle
          cx="14.4998"
          cy="4.5"
          r="4"
          fill="#00D4FC"
          fillOpacity="0.5"
          stroke="#FFFBF5"
        />
      </svg>
    </>
  );
};

export default OrangeSvg;
