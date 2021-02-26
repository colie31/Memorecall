import React from "react";
import { useDispatch } from "react-redux"
import { setEditable, reset } from "../../../store/entries"

const EditNav = ({ body, imageOne, imageTwo }) => {
  const dispatch = useDispatch();

  // save functions
  const saveChanges = () => {
    console.log(
      "journal bar",
      body.current,
      imageOne,
      imageTwo
    );
    dispatch(setEditable(false));
  };

  const handleCancel = () => {
    dispatch(setEditable(false));
    // dispatch(reset())
  };


  return (
    <>
      <button >Page Layout</button>
      <button onClick={() => saveChanges()}>Save</button>
      <button onClick={() => handleCancel()}>Cancel</button>
    </>
  );
};

export default EditNav;