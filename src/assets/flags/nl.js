import * as React from "react";

const NLFlag = (props) => {
  return (
    <svg
      style={{ width: "20px", height: "20px" }}
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      {...props}
    >
      <path
        d="M414.981.5H97.019C42.247 7.823 0 54.725 0 111.5v59.333h512V111.5c0-56.775-42.247-103.677-97.019-111z"
        fill="#ff4b55"
      />
      <path
        d="M0 399.5c0 61.856 50.144 112 112 112h288c61.856 0 112-50.144 112-112v-58.333H0V399.5z"
        fill="#41479b"
      />
      <path fill="#f5f5f5" d="M0 170.83H512V341.16H0z" />
    </svg>
  );
};

export default NLFlag;
