import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom"
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { utils } from "react-modern-calendar-datepicker";
//actions
import { deleteAnEntry, setIndex, leftEntry, setEditable } from "../../../store/entries"
import EditNav from "./EditNav"



const JournalBar = ({
  body,
  imageOne,
  imageTwo,
  editable,  
  selectedDay, 
  setSelectedDay, 
  entries }) => {
  
  const { id } = useParams();
  const history = useHistory();

  const dispatch = useDispatch();
  const entry =  useSelector(state => state.entries.entry);
  
  const goToFirstpage = () => {
    return dispatch(setIndex(0))
  }

  const goToLastPage = () => {
    return dispatch(setIndex(entries.length - 1))
  }

  const findEntryBefore = () => {
    return dispatch(leftEntry())
  }

  const deleteCurrentEntry = () => {
    dispatch(deleteAnEntry(entry.id))
    return findEntryBefore();
  }

  const helperFunction = (dateObject) => {
    return new Date(dateObject.year, dateObject.month, dateObject.day).getTime();
  }

  const findClosestJournal = (date, array) => {
    if(array.length === 1) return dispatch(setIndex(entries.indexOf(array[0])))
    let index = Math.floor(array.length / 2)
    let arrayRight = array.slice(0, index)
    let arrayLeft = array.slice(index)
    let searchedDate = helperFunction(date)
    let rightDate = helperFunction(arrayRight[arrayRight.length -1].date_object)
    let leftDate = helperFunction(arrayLeft[0].date_object)
    // console.log(leftDate > searchedDate, searchedDate);
    console.log(arrayRight, arrayLeft)

    if(rightDate < searchedDate && leftDate > searchedDate) {
      let rightSide = searchedDate - rightDate;
      let leftSide = leftDate - searchedDate
      if(rightSide < leftSide) {
        return dispatch(setIndex(entries.indexOf(arrayRight[arrayRight.length - 1])));
      } else {
        return dispatch(setIndex(entries.indexOf(arrayLeft[0])));
      }
    }
    
    if(rightDate > searchedDate && leftDate > searchedDate) {
      findClosestJournal(date, arrayRight)
    } else {
      findClosestJournal(date, arrayLeft)
    }
  }

  const setCurrentEntry = (e) => {
    setSelectedDay(e)
     if (helperFunction(e) < helperFunction(entries[0].date_object)) {
        return dispatch(setIndex(0));
     } else if(helperFunction(e) >
       helperFunction(entries[entries.length - 1].date_object)) {
        return dispatch(setIndex(entries.length - 1));
     }


    const foundEntryIndex = entries.findIndex(anEntry => {
      const entryDate = anEntry.date_object
      return (
        helperFunction(entryDate) === helperFunction(e)
      );
    })
    return foundEntryIndex >= 0 ? dispatch(setIndex(foundEntryIndex)) : findClosestJournal(e, entries)
  }




  let bar;
  if(editable) {
    bar = (
        <EditNav body={body} imageOne={imageOne} imageTwo={imageTwo} />
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
        <button className="journal-bar__buttons">
          Add
        </button>
        <button 
        className="journal-bar__buttons" 
        onClick={() => dispatch(setEditable(true))}>
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
