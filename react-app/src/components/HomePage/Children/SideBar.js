import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Modal } from "../../../context/Modal"
import "../HomePage.css"

import CreateJournalForm from "./CreateJournalForm"

const SideBar = ({ journalId }) => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(true);

  const directUserToJournal = (id) => {
    history.push(`journals/${id}`);
  };

    return (
      <div className="side-bar__container">
        <button>Time-Line</button>
        <button onClick={() => setShowModal(true)}>Add A Journal</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <CreateJournalForm />
          </Modal>
        )}
        <button
          className="journal-button"
          disabled={!journalId ? true : false}
          onClick={() => directUserToJournal(journalId)}
        >
          View journal
        </button>
        <button className="journal-button" disabled={!journalId ? true : false}>
          Edit Journal
        </button>
        <button className="journal-button" disabled={!journalId ? true : false}>
          Delete Journal
        </button>
      </div>
    );
}

export default SideBar;