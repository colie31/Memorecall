import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { HexColorPicker } from "react-colorful";
import "react-colorful/dist/index";
import "../HomePage.css"

import { createJournal, updateJournal } from "../../../store/journals"

const JournalForm = ({ method, theJournal, showModal }) => {
    const post = method === "POST"
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const [ journalName, setJournalName  ] = useState(post ? "" : theJournal.name);
    const [journalColor, setJournalColor] = useState(post ? "#60d374" : theJournal.color);
    const [ errors, setErrors ] = useState([])


    const handleSubmit = async (e) => {
        e.preventDefault()

        const newJournal = {
            name: journalName,
            color: journalColor,
        }
        
        let data;
        if(post) {
            data = await dispatch(createJournal(newJournal))
        } else {
            data = await dispatch(updateJournal(theJournal.id, newJournal))
        }

        
        if(data.errors) return setErrors(data.errors)
        return showModal(false)
    }

    return (
        <div className="create-journal__container">
         <h1>{post ? "Create" : "Update"} A Journal!</h1>
         {errors.map((error, i) => (
             <div style={{ color: "red" }} key={i}>{error}</div>
         ))}
         <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="journalName">
                What's your journal name?
                </label>
            </div>
            <div>
                <input
                required
                id="journalName" 
                type="text"
                value={journalName}
                onChange={(e)=> setJournalName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="colorPicker">Pick A Color</label>
            </div>
            <div id="colorbox" style={{ background:journalColor }} />
            <div>
                <HexColorPicker
                id="colorPicker" 
                color={journalColor} 
                onChange={
                    (e)=> setJournalColor(e)
                }/>
            </div>
            <div>
                <button type="submit">Submit</button>
                <button
                onClick={
                    ()=> showModal(false)
                }>Cancel</button>
            </div>
         </form>
        </div>
    )
}

export default JournalForm;
