import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { utils } from "react-modern-calendar-datepicker";
//actions
import { deleteAnEntry } from "../../../store/entries"


const JournalBar = ({ currentIndex, selectedDay, setSelectedDay, entries, setIndex }) => {
  const dispatch = useDispatch();
  const entry =  useSelector(state => state.entries.entry);
  // const [selectedDay, setSelectedDay] = useState(null);
  // console.log("myEntry", entry)
  // console.log(selectedDay)
  const goToFirstpage = () => {
    return setIndex(0)
  }

  const goToLastPage = () => {
    return setIndex(entries.length - 1)
  }

  const findEntryBefore = (entryDate) => {
    // const entryBeforeIndex = entries.findIndex(anEntry => {
    //   console.log(anEntry.date_object)
    //   console.log(entryDate)
    //   return utils().isBeforeDate(entryDate, anEntry.date_object);
    // })
    // console.log("before index", entryBeforeIndex)
    // return entryBeforeIndex >= 0 ? setIndex(entryBeforeIndex) : setIndex(currentIndex - 1)
    return currentIndex !== 0 ? setIndex(currentIndex-1) : setIndex(0)
  }

  const deleteCurrentEntry = () => {
    dispatch(deleteAnEntry(entry.id))
    return findEntryBefore(entry.date_object);
  }

  const setCurrentEntry = (e) => {
    setSelectedDay(e)
    // const date = entry.date_object
    // console.log("entrydate", date)
    // return console.log(new Date(date.year, date.month, date.day).getTime() === new Date(e.year, e.month, e.day).getTime())
    const foundEntryIndex = entries.findIndex(anEntry => {
      const entryDate = anEntry.date_object
      return (
        new Date(entryDate.year, entryDate.month, entryDate.day).getTime() ===
        new Date(e.year, e.month, e.day).getTime()
      );
    })
    return foundEntryIndex >= 0 ? setIndex(foundEntryIndex) : null
  }

  return (
    <>
      {entry && (
        <>
          <button
            className="journal-bar__buttons"
            onClick={() => goToFirstpage()}
          >
            First Page
          </button>
          <button
            className="journal-bar__buttons"
            onClick={() => goToLastPage()}
          >
            Last Page
          </button>
          <button className="journal-bar__buttons" onClick={() => null}>
            Add
          </button>
          <button className="journal-bar__buttons" onClick={() => null}>
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
      )}
    </>
  );
};

export default JournalBar;
