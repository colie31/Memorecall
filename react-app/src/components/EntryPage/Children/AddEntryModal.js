import React from "react";
import { useHistory, useParams } from "react-router-dom"
import "../EntryPage.css"


const AddEntryModal = () => {
    const { id } = useParams()
    const history = useHistory();

    const handleAddedEntry = () => {
        history.push(`/journals/${id}/new`);
    };

    return (
        <div className="create-entry__container">
        <p>You do not have any current entries.</p>
        <button
        onClick={()=> handleAddedEntry()}>Add an entry</button>
        <button
        onClick={() => history.push("/")}>Back to my journals</button>
        </div>
    )
}

export default AddEntryModal;