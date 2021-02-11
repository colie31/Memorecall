import React from "react";
import { useSelector } from "react-redux";
import Search from "../../Search";

const JournalBar = () => {
  

  return (
    <>
      <button>First Page</button>
      <button>Last Page</button>
      <button>Edit</button>
      <button>Delete</button>
      <Search />
    </>
  );
};

export default JournalBar;
