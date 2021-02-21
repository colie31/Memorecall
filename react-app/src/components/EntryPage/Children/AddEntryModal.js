import React from "react";
import { useHistory } from "react-router-dom"
import "../EntryPage.css"


const AddEntryModal = () => {
    const history = useHistory();

    const handleAddedEntry = () => {
        console.log("hello from function")
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