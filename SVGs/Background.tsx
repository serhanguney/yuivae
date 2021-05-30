export default function Background() {
  return (
    <div className="background">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="530"
        fill="none"
        viewBox="0 0 1440 530"
      >
        <path
          fill="url(#paint0_linear)"
          d="M1440 83.082S1242 0 765 0 0 83.082 0 83.082v305.741s261-22.557 720 82.234 720 37.923 720 37.923V83.082z"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="720"
            x2="720"
            y1="0"
            y2="530"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EEE"></stop>
            <stop offset="1" stopColor="#F5F5F5" stopOpacity="0.49"></stop>
          </linearGradient>
        </defs>
      </svg>
      <style jsx>{`
        .background {
          grid-column: 1/-1;
          grid-row: 2/10;
        }
        .background > svg {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
