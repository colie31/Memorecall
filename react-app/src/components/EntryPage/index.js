import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import JournalBar from "./Children/JournalBar"
import Entry from "./Children/Entry"

import { getAllJournalEntries } from "../../store/entries";


const EntryPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const entries = useSelector(state => state.entries.entries)
    const [currentEntryIndex, setCurrentEntryIndex] = useState(0)

    useEffect(() => {
       dispatch(getAllJournalEntries(id));
    }, [dispatch])


    return (
      <>
        <div className="journal-bar__container">
          <JournalBar />
        </div>
        <div className="entry-body__container">
          {entries && (
          <>
          <button></button>
          <Entry index={currentEntryIndex} entries={entries} />
          <button></button>
          </>
          )}
        </div>
      </>
    );
}

export default EntryPage