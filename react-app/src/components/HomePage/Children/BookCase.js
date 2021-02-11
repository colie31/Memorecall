import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import { getAllJournalEntries } from "../../../store/entries"


const BookCase= ({ journals }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const directUserToJournal = async (id) => {
    // await dispatch(getAllJournalEntries(id));
    history.push(`journals/${id}`)
  }
  

  return (
      <>
      {journals && journals.map(journal => {
        return (
          <div key={journal.id} className="journal" style={{ background: journal.color }}>
            <div
            onClick={
              () => directUserToJournal(journal.id)
            }>{journal.name}</div>
          </div>
        )
        })}
      </>
  )
};

export default BookCase;
