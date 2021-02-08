import React from "react";
import LoginForm from "../auth/LoginForm"
import { string } from "prop-types";

const Book = ({ color }) => {
  const bookColor = color;

  return (
    <svg
      id="svg"
      width="911px"
      height="518px"
      viewBox="0 0 911 518"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Journal</title>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="Rectangle"
          stroke="#979797"
          fill={bookColor}
          x="408.5"
          y="18.5"
          width="97"
          height="494"
          rx="36"
        ></rect>
        <rect
          id="Rectangle"
          stroke="#979797"
          fill={bookColor}
          strokeLinejoin="round"
          transform="translate(229.001904, 259.218155) rotate(-1.000000) translate(-229.001904, -259.218155) "
          x="5.00190381"
          y="5.21815508"
          width="448"
          height="508"
          rx="36"
        ></rect>
        <rect
          id="Rectangle"
          stroke="#979797"
          fill={bookColor}
          strokeLinejoin="round"
          transform="translate(683.001904, 260.218155) rotate(1.000000) translate(-683.001904, -260.218155) "
          x="459.001904"
          y="6.21815508"
          width="448"
          height="508"
          rx="36"
        ></rect>
        <rect
          id="Rectangle"
          stroke="#979797"
          fill="#FFFFFF"
          x="442.5"
          y="39.5"
          width="24"
          height="458"
        ></rect>
        <rect
          id="Rectangle"
          stroke="#979797"
          fill="#FFFFFF"
          transform="translate(238.500000, 259.000000) rotate(-1.000000) translate(-238.500000, -259.000000) "
          x="24.5"
          y="9.5"
          width="428"
          height="499"
          rx="36"
        ></rect>
        <rect
          id="Rectangle"
          stroke="#979797"
          fill="#FFFFFF"
          transform="translate(677.500000, 259.000000) rotate(1.000000) translate(-677.500000, -259.000000) "
          x="463.5"
          y="9.5"
          width="428"
          height="499"
          rx="36"
        ></rect>
        <rect
          id="Rectangle"
          stroke="#979797"
          fill="#FFFFFF"
          transform="translate(245.000000, 259.000000) rotate(-1.000000) translate(-245.000000, -259.000000) "
          x="37.5"
          y="9.5"
          width="415"
          height="499"
          rx="36"
        ></rect>
        <rect
          id="Rectangle"
          stroke="#979797"
          fill="#FFFFFF"
          transform="translate(670.000000, 259.000000) rotate(1.000000) translate(-670.000000, -259.000000) "
          x="462.5"
          y="9.5"
          width="415"
          height="499"
          rx="36"
        ></rect>
        <rect
          id="Rectangle"
          stroke="#979797"
          fill="#FFFFFF"
          x="55.5"
          y="9.5"
          width="401"
          height="499"
          rx="36"
        ></rect>
        <rect
          id="Rectangle"
          stroke="#979797"
          fill="#FFFFFF"
          x="455.5"
          y="9.5"
          width="401"
          height="499"
          rx="36"
        ></rect>
        <rect
          id="Rectangle"
          stroke="#979797"
          fill="#FFFFFF"
          x="55.5"
          y="9.5"
          width="401"
          height="499"
          rx="36"
        ></rect>
      </g>
    </svg>
  );
};

Book.propTypes = {
  color: string,
};

Book.defaultProps = {
  color: "#2ECC71",
};

export default Book;
