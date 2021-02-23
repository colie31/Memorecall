import React from "react";
import { useDispatch } from "react-redux"
import { setEditable } from "../../../store/entries"

const EditNav = ({ body, imageOne, imageTwo }) => {
  const dispatch = useDispatch();

  // save functions
  const saveChanges = () => {
    console.log(
      "journal bar",
      body.current,
      imageOne.current,
      imageTwo.current
    );
    dispatch(setEditable(false));
  };


  return (
    <>
      <button onClick={() => saveChanges()}>Save</button>
      <button onClick={() => dispatch(setEditable(false))}>Cancel</button>
    </>
  );
};

export default EditNav;