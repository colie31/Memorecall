import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeCurrentEntry } from "../../../store/entries";

const Entry = ({ index, entries }) => {
    const dispatch = useDispatch();
    const entry = useSelector(state => state.entries.entry)
    // if(entries) console.log(entries[index])
    // let entry = entries[index]
    useEffect(() => {
        dispatch(storeCurrentEntry(entries[index]))
    },[dispatch, index])

    // console.log(entry)
    return <>{entry && <h1 className="entry-body__page">{entry.body}</h1>}</>;
}

export default Entry;