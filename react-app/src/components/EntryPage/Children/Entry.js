import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeCurrentEntry } from "../../../store/entries";

const Entry = ({ index, entries }) => {
    const dispatch = useDispatch();
    const entry = useSelector(state => state.entries.entry)
    if(entries) console.log(entries[index])

    useEffect(() => {
        dispatch(storeCurrentEntry(entries[index]))
    },[dispatch])

    return (
        <>
        {entry && <h1>{entry.journal_name}</h1>}
        </>
    )
}

export default Entry;