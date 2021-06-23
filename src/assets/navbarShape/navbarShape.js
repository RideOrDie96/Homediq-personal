import React from "react";

import styled from "styled-components";

// export const NavbarShape = styled.div`
//     height: 50px;
//     display: flex;
//     align-items: center;
//     margin-top: 5px;
//     margin-left: 25px;
//     &.left {
//       width: 55%;
//       margin-left: -25px;
//       background-color: #fff;
//       z-index: 999;
//     }
//     &.right {
//       width: 40%;
//     }
//   `;

export const NavbarShape = (props) => {
  return (
    <svg
      style={{
        height: "50px",
        display: "flex",
        marginTop: "5px",
      }}
      viewBox="0 0 960 125"
      fill="none"
      {...props}
    >
      <path d="M0 125h960C889.5 125 911.5 0 850 0H0v125z" fill="#fff" />
    </svg>
  );
};
