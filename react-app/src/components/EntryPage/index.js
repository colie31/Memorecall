import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import JournalBar from "./Children/JournalBar"
import Entry from "./Children/Entry"

import "./EntryPage.css"
import { getAllJournalEntries, storeCurrentEntry } from "../../store/entries";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";



const EntryPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const entries = useSelector(state => state.entries.entries)
    // const entry = useSelector(state => state.entries.entry)
    const [currentEntryIndex, setCurrentEntryIndex] = useState(0)

    useEffect(() => {
       dispatch(getAllJournalEntries(id))
    }, [dispatch])
    
    // useEffect(() => {
    //     // dispatch(storeCurrentEntry(entries[currentEntryIndex]))
    //     console.log(currentEntryIndex)
    // }, [currentEntryIndex])
    

    const handleClick = (string) => {
        const max = entries.length - 1
        // console.log(max)
        // console.log("before conditional", currentEntryIndex)
        if(string === "left" && currentEntryIndex > 0) {
            setCurrentEntryIndex(currentEntryIndex-1)
        } 
        else if (string === "right" && currentEntryIndex < max) {
            setCurrentEntryIndex(currentEntryIndex+1)
        }
        // console.log("after conditional", currentEntryIndex);
    }


    return (
      <div className="entry-page__container">
        <div className="journal-bar__container">
          <JournalBar />
        </div>
        <div className="entry-body__container">
          {entries && (
            <>
              <AiFillCaretLeft 
              className="entry-body__button"
              onClick={
                  () => handleClick("left")
              } />
              <Entry 
              index={currentEntryIndex} 
              entries={entries} />
              <AiFillCaretRight 
              className="entry-body__button" 
              onClick={
                  () => handleClick("right")
              }/>
            </>
          )}
        </div>
      </div>
    );
}

export default EntryPage