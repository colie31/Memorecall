import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import { setEditable, reset, addEntry, updateEntry } from "../../../store/entries"

const EditNav = ({ 
  body, 
  imageOne, 
  imageTwo, 
  category, 
  pageLayout, 
  setPageLayout,
  setErrors }) => {

  const { id } = useParams();
  const editable = useSelector(state => state.entries.editable)
  const entry = useSelector(state => state.entries.entry)
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false)

  console.log(" id", id)
  // save functions
  const saveChanges = async () => {
    const object = {
    body: body.current,
    page_layout: "layout_one",
    journal_id: parseInt(id),
    category_id: category,
    }

    console.log(object)


    if(editable) {
      const res = await dispatch(updateEntry(object, entry.id))
      dispatch(setEditable(false));
    } else {
      const res = await dispatch(addEntry(object))
      if(!res.errors) history.push(`/journals/${id}`)

    }
  };

  const handleCancel = () => {
    if(editable) {
       dispatch(setEditable(false));
    } else { 
       history.push(`/journals/${id}`)
    }
  };



  return (
    <>
      <button onClick={() => saveChanges()}>Save</button>
      <button onClick={() => handleCancel()}>Cancel</button>
    </>
  );
};

export default EditNav;