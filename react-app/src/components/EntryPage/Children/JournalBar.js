import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom"
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { utils } from "react-modern-calendar-datepicker";
//actions
import { deleteAnEntry } from "../../../store/entries"



const JournalBar = ({
  body,
  imageOne,
  imageTwo,
  editable, 
  setEditable, 
  currentIndex, 
  selectedDay, 
  setSelectedDay, 
  entries, 
  setIndex }) => {
  
  const { id } = useParams();
  const history = useHistory();

  const dispatch = useDispatch();
  const entry =  useSelector(state => state.entries.entry);
  
  const goToFirstpage = () => {
    return setIndex(0)
  }

  const goToLastPage = () => {
    return setIndex(entries.length - 1)
  }

  const findEntryBefore = () => {
    return currentIndex !== 0 ? setIndex(currentIndex-1) : setIndex(0)
  }

  const deleteCurrentEntry = () => {
    dispatch(deleteAnEntry(entry.id))
    return findEntryBefore();
  }

  const setCurrentEntry = (e) => {
    setSelectedDay(e)
    const foundEntryIndex = entries.findIndex(anEntry => {
      const entryDate = anEntry.date_object
      return (
        new Date(entryDate.year, entryDate.month, entryDate.day).getTime() ===
        new Date(e.year, e.month, e.day).getTime()
      );
    })
    return foundEntryIndex >= 0 ? setIndex(foundEntryIndex) : alert(`no`)
  }

  // save functions
  const saveChanges = () => {
    console.log("journal bar", body.current, imageOne.current, imageTwo.current)
    setEditable(false);
  }



  let bar;
  if(editable) {
    bar = (
      <>
      <button
      onClick={() => saveChanges()}>Save</button>
      <button
      onClick={() => setEditable(false)}>Cancel</button>
      </>
      )
  } else {
    bar = (
      <>
        <button
          className="journal-bar__buttons"
          onClick={() => goToFirstpage()}
        >
          First Page
        </button>
        <button className="journal-bar__buttons" onClick={() => goToLastPage()}>
          Last Page
        </button>
        <button className="journal-bar__buttons" onClick={() => history.push(`/journals/${id}/new`)}>
          Add
        </button>
        <button 
        className="journal-bar__buttons" 
        onClick={() => setEditable(true)}>
          Edit
        </button>
        <button
          className="journal-bar__buttons"
          onClick={() => deleteCurrentEntry()}
        >
          Delete
        </button>
        <DatePicker
          value={selectedDay}
          onChange={setCurrentEntry}
          // minimumDate={entries[0].date_object}
          maximumDate={utils().getToday()}
          inputPlaceholder="search entries by date..."
        />
      </>
    );
  }

  return (
    <>
      {entry && bar}
    </>
  );
};

export default JournalBar;
