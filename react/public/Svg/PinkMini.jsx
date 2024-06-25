
const PinkMini = ({rotation}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <circle
          opacity="0.5"
          cx="11.5"
          cy="10.5"
          r="9"
          transform="rotate(-90 11.5 10.5)"
          fill="#CA05D1"
        />
        <circle
          cx="5"
          cy="5"
          r="4"
          transform="rotate(-90 5 5)"
          fill="#0F9918"
          fillOpacity="0.5"
          stroke="#FFFBF5"
        />
      </svg>
    </>
  );
};

export default PinkMini;
