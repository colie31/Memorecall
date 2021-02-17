import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../HomePage.css"

const SideBar = ({ journalId }) => {
  const history = useHistory();

  const directUserToJournal = (id) => {
    history.push(`journals/${id}`);
  };

    return (
      <div className="side-bar__container">
        <button>Time-Line</button>
        <button>Add A Journal</button>
        <button
        onClick={
          () => directUserToJournal(journalId)
        }>View journal</button>
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