const IonicIcon = ({
  size = 18, // or any default size of your choice
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 312 312"
    fill="none"
    className={className}
  >
    <path
      d="M37.44 156C37.44 90.5211 90.5211 37.44 156 37.44C182.359 37.44 206.695 46.0275 226.387 60.5822C231.551 48.4259 241.959 39.0349 254.772 35.2475C227.883 13.232 193.477 0 156 0C69.8436 0 0 69.8436 0 156C0 242.156 69.8436 312 156 312C242.156 312 312 242.156 312 156C312 137.969 308.933 120.623 303.285 104.475C295.6 114.865 283.507 121.797 269.768 122.508C272.885 133.115 274.56 144.351 274.56 156C274.56 221.479 221.479 274.56 156 274.56C90.5211 274.56 37.44 221.479 37.44 156Z"
      fill="#3880FF"
    />
    <path
      d="M156 224.25C193.605 224.25 224.25 193.663 224.25 156C224.25 118.395 193.663 87.7501 156 87.7501C118.337 87.7501 87.75 118.395 87.75 156C87.75 193.605 118.395 224.25 156 224.25Z"
      fill="#3880FF"
    />
    <path
      d="M258.375 97.5001C277.222 97.5001 292.5 82.2218 292.5 63.3751C292.5 44.5283 277.222 29.2501 258.375 29.2501C239.528 29.2501 224.25 44.5283 224.25 63.3751C224.25 82.2218 239.528 97.5001 258.375 97.5001Z"
      fill="#3880FF"
    />
  </svg>
);

export default IonicIcon;