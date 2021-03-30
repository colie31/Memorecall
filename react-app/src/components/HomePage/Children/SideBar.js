import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Modal } from "../../../context/Modal"
import "../HomePage.css"

import JournalForm from "./JournalForm"
//actions
import { deleteJournal } from "../../../store/journals"
import { getAllJournalEntries } from "../../../store/entries"

import edit from "../../../pics/edit-icon.png"
import view from "../../../pics/journal-icon.png"

const SideBar = ({ theJournal, user }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [ method, setMethod ] = useState("")
  console.log("journal", theJournal)

  const directUserToJournal = async (id) => {
    await dispatch(getAllJournalEntries(id))
    history.push(`journals/${id}`);
  };

  const handlePostSettings = () => {
    setShowModal(true);
    setMethod("POST")
  }

  const handleUpdateSettings = () => {
    setShowModal(true);
    setMethod("UPDATE");
  }

    return (
      <div className="side-bar__container">
        <h1>Welcome {user.username}</h1>
        <button onClick={() => handlePostSettings()}>Add A Journal</button>
        <button
          className="journal-button view"
          disabled={!theJournal ? true : false}
          onClick={() => directUserToJournal(theJournal.id)}
        >
          <img src={view} alt="" />
          View {theJournal ? `"${theJournal.name}"` : null}
        </button>
        <button
          className="journal-button edit"
          disabled={!theJournal ? true : false}
          onClick={() => handleUpdateSettings()}
        >
          <img src={edit} alt="" />
          Edit {theJournal ? `"${theJournal.name}"` : null}
        </button>
        <button
          className="journal-button delete"
          disabled={!theJournal ? true : false}
          onClick={() => dispatch(deleteJournal(theJournal.id))}
        >
          Delete {theJournal ? `"${theJournal.name}"` : null}
        </button>
        {showModal && (
          <Modal>
            <JournalForm
              method={method}
              showModal={setShowModal}
              theJournal={theJournal}
            />
          </Modal>
        )}
      </div>
    );
}

export default SideBar;