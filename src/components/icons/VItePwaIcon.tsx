const VitePWAIcon = ({
  size, // or any default size of your choice
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 155 155"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M50.6853 104.345C48.3909 100.398 46.0047 96.3602 43.7103 92.4138C43.5268 92.1385 43.435 91.8632 43.5267 91.4043C45.8211 84.4293 48.1155 77.3626 50.4099 70.3876C50.4099 70.2959 50.5017 70.1123 50.5935 69.837C53.255 75.0682 55.8247 80.2076 58.4862 85.4389C58.6697 85.0717 58.7615 84.7964 58.8533 84.5211C62.4326 73.508 66.0118 62.5867 69.5911 51.5736C69.7746 51.1147 69.9582 50.9312 70.417 51.0229C73.6292 51.0229 76.8414 51.0229 80.1453 51.0229C80.6959 51.0229 80.8795 51.2065 81.063 51.6654C84.367 62.5867 87.6709 73.4162 90.9748 84.3375C91.0666 84.6129 91.1584 84.98 91.3419 85.4389C91.8008 84.5211 92.1679 83.6033 92.4432 82.7774C96.9402 72.3149 101.345 61.9443 105.842 51.4818C105.934 51.2065 106.026 51.0229 106.393 51.0229C110.982 51.0229 115.571 51.0229 120.068 51.0229C120.068 51.0229 120.16 51.0229 120.251 51.0229C119.701 52.3078 119.242 53.5009 118.783 54.7857C112.175 71.0301 105.659 87.3661 99.0511 103.61C98.9593 103.794 98.7757 103.978 98.8675 104.253C94.0952 104.253 89.3229 104.253 84.5505 104.253C84.6423 104.069 84.5505 103.794 84.4587 103.61C84.0916 102.417 83.7245 101.224 83.3574 100.031C80.6042 91.3125 77.9426 82.6856 75.1894 73.9669C75.1894 73.7833 75.1894 73.5998 74.9141 73.508C71.5184 83.6951 68.2144 93.974 64.8187 104.161C60.0464 104.345 55.3658 104.345 50.6853 104.345Z"
      fill="#4AA6C0"
    />
    <path
      d="M7 104.345C7 86.8155 7 69.2863 7 51.7571C7 51.2065 7.09178 51.0229 7.73421 51.0229C15.168 51.0229 22.6019 51.0229 30.0357 51.0229C34.1656 51.0229 38.0202 51.9407 41.3241 54.5104C42.7008 55.5199 43.8938 56.8048 44.9034 58.2732C45.0869 58.5485 45.0869 58.7321 44.9952 59.0074C42.2419 67.5426 39.3968 76.1695 36.6436 84.7046C36.5518 85.0717 36.3682 85.1635 36.0011 85.2553C34.0738 85.7142 32.0548 85.9895 30.0357 85.9895C27.0071 85.9895 24.0703 85.9895 21.0417 85.9895C20.6746 85.9895 20.5828 85.9895 20.5828 86.4484C20.5828 92.322 20.5828 98.2874 20.5828 104.161V104.253C16.0858 104.345 11.497 104.345 7 104.345ZM20.5828 68.4603C20.5828 70.6629 20.5828 72.8656 20.5828 75.16C20.5828 75.6188 20.6746 75.7106 21.1335 75.7106C22.2348 75.7106 23.4279 75.7106 24.5292 75.7106C26.0894 75.7106 27.6495 75.7106 29.2097 75.3435C30.5864 74.9764 31.8712 74.5175 32.6972 73.3244C34.441 70.8465 34.6245 68.0932 33.5232 65.34C32.6054 62.862 30.4946 61.8525 28.0166 61.5771C25.7223 61.3018 23.4279 61.4854 21.1335 61.3936C20.6746 61.3936 20.5828 61.5771 20.5828 61.9442C20.5828 64.1469 20.5828 66.3495 20.5828 68.4603Z"
      fill="#EEEEEE"
    />
    <path
      d="M128.167 92.3636H114L133.833 44V71.6364H148L128.167 120V92.3636Z"
      fill="#F7D94B"
    />
  </svg>
);

export default VitePWAIcon;
