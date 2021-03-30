import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
//components
import EntryBar from "./Children/EntryBar"
import Entry from "./Children/Entry"

import "./EntryPage.css"
import {
  getCategories,
  getAllJournalEntries,
  leftEntry,
  rightEntry,
} from "../../store/entries";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { getJournals } from "../../store/journals"


const EntryPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const entries = useSelector(state => state.entries.entries);
    const user = useSelector(state => state.session.user)
    const editable = useSelector(state => state.entries.editable)
    const [selectedDay, setSelectedDay] = useState(null);
    const [imageOne, setImageOne] = useState("");
    const [pageLayout, setPageLayout] = useState(1);
    const [category, setCategory] = useState("")
    const body = useRef("");
    // const imageTwo = useRef("")
    
    const journal = useSelector(state => state.journals.journal)
    console.log("myJournal", journal)
    const categories = useSelector((state) => state.entries.categories);


    useEffect(() => {
      (async () => {
        await dispatch(getJournals(user.id))
        await dispatch(getAllJournalEntries(id))
        await dispatch(getCategories());
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
          <EntryBar
            entries={entries}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            editable={editable}
            body={body}
            imageOne={imageOne}
            category={category}
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
                entries={entries}
                setSelectedDay={setSelectedDay}
                editable={editable}
                body={body}
                imageOne={imageOne}
                setImageOne={(image) => setImageOne(image)}
                category={category}
                setCategory={setCategory}
                categories={categories}
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