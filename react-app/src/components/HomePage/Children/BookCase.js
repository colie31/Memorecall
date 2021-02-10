import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import { getAllJournalEntries, storeOneJournal } from "../../../store/entries"


const BookCase= ({ journals }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const directUserToJournal = (journal) => {
    console.log(journal)
    dispatch(storeOneJournal(journal))
    dispatch(getAllJournalEntries(journal.id));
  }

  return (
      <>
      {journals && journals.map(journal => {
        return (
          <div key={journal.id} className="journal" style={{ background: journal.color }}>
            <div
            onClick={
              () => directUserToJournal(journal)
            }>{journal.name}</div>
          </div>
        )
        })}
      </>
  )
};

export default BookCase;
