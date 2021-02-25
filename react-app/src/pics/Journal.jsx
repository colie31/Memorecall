import React from "react";

const Journal  = ({ journal, func, dispatch, setJournal }) => {
  return (
    <svg
      width="35px"
      height="130px"
      viewBox="0 0 210 600"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>something</title>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <text fill="rgb(121,0,121)" x=".5" y=".5">
          {journal.name}
        </text>
        <rect
          id="Rectangle"
          stroke="#979797"
          fillOpacity="1"
          fill={journal.color}
          x="0.5"
          y="0.5"
          width="209"
          height="650"
          rx="36"
          onClick={() => dispatch(func(journal.id))}
        ></rect>
        <rect
          id="Rectangle"
          stroke="#979797"
          fill="#D8D8D8"
          x="0.5"
          y="52.5"
          width="209"
          height="9"
        ></rect>
        <rect
          id="Rectangle"
          stroke="#979797"
          fill="#D8D8D8"
          x="0.5"
          y="76.5"
          width="209"
          height="27"
        ></rect>
      </g>
    </svg>
  );}
  

export default Journal;
