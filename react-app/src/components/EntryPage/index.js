import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import JournalBar from "./Children/JournalBar"
import Entry from "./Children/Entry"

import "./EntryPage.css"
import { getAllJournalEntries } from "../../store/entries";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";



const EntryPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const entries = useSelector(state => state.entries.entries);
    const [currentEntryIndex, setCurrentEntryIndex] = useState(0);
    const [selectedDay, setSelectedDay] = useState(null);
    const [editable, setEditable] = useState(false);
    const body = useRef("");
    const imageOne = useRef("");
    const imageTwo = useRef("")


    useEffect(() => {
        dispatch(getAllJournalEntries(id))
    }, [dispatch])

    
    
    const handleClick = (string) => {
        const max = entries.length - 1
    
        if(string === "left" && currentEntryIndex > 0) {
            setCurrentEntryIndex(currentEntryIndex-1)
        } 
        else if (string === "right" && currentEntryIndex < max) {
            setCurrentEntryIndex(currentEntryIndex+1)
        }
    }


    return (
      <div className="entry-page__container">
        <div className="journal-bar__container">
          <JournalBar
            entries={entries}
            setIndex={setCurrentEntryIndex}
            currentIndex={currentEntryIndex}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            setEditable={setEditable}
            editable={editable}
            body={body}
          />
        </div>
        <div className="entry-body__container">
          {entries && (
            <>
              <AiFillCaretLeft
                className="entry-body__button"
                onClick={() => (editable ? null : handleClick("left"))}
              />
              <Entry
                index={currentEntryIndex}
                entries={entries}
                setSelectedDay={setSelectedDay}
                editable={editable}
                body={body}
                imageOne={imageOne}
                imageTwo={imageTwo}
              />
              <AiFillCaretRight
                className="entry-body__button"
                onClick={() => (editable ? null : handleClick("right"))}
              />
            </>
          )}
        </div>
      </div>
    );
}

export default EntryPage