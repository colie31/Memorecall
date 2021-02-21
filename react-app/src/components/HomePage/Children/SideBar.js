import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Modal } from "../../../context/Modal"
import "../HomePage.css"

import JournalForm from "./JournalForm"
import { deleteJournal } from "../../../store/journals"

const SideBar = ({ theJournal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [ method, setMethod ] = useState("")
  console.log("journal", theJournal)

  const directUserToJournal = (id) => {
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
        <button>Time-Line</button>
        <button onClick={() => handlePostSettings()}>Add A Journal</button>
        <button
          className="journal-button"
          disabled={!theJournal ? true : false}
          onClick={() => directUserToJournal(theJournal.id)}
        >
          View {theJournal ? `"${theJournal.name}"` : null}
        </button>
        <button
          className="journal-button"
          disabled={!theJournal ? true : false}
          onClick={() => handleUpdateSettings()}
        >
          Edit {theJournal ? `"${theJournal.name}"` : null}
        </button>
        <button
          className="journal-button"
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