import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import JournalBar from "./Children/EntryBar"
import Entry from "./Children/Entry"

import "./EntryPage.css"
import { getAllJournalEntries, leftEntry, rightEntry } from "../../store/entries";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { getJournals } from "../../store/journals"



const EntryPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const entries = useSelector(state => state.entries.entries);
    const entry = useSelector(state => state.entries.entry)
    const user = useSelector(state => state.session.user)
    const [editable, setEditable] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);
    const body = useRef("");
    const imageOne = useRef("");
    const imageTwo = useRef("")
    
    const journal = useSelector(state => state.journals.journal)
    console.log("myJournal", journal)

    useEffect(() => {
      (async () => {
        await dispatch(getJournals(user.id))
        await dispatch(getAllJournalEntries(id))
      })()
    }, [dispatch])


    
    
    const handleClick = (string) => {
        if(string === "left") {
            dispatch(leftEntry())
        } 
        else if (string === "right") {
            dispatch(rightEntry())
        }
    }


    return (
      <div className="entry-page__container">
        <div className="journal-bar__container">
          <JournalBar
            entries={entries}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            setEditable={setEditable}
            editable={editable}
            body={body}
            imageOne={imageOne}
            imageTwo={imageTwo}
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
                entry={entry}
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