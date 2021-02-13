import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeCurrentEntry } from "../../../store/entries";

const Entry = ({ index, entries }) => {
    const dispatch = useDispatch();
    const entry = useSelector(state => state.entries.entry)
   
    useEffect(() => {
        dispatch(storeCurrentEntry(entries[index]))
    },[dispatch, index])
    
    return (
      <div className="entry-body__page">
      {entry && (
          <h1>{entry.body}</h1>
          )}
      </div>
    );
}

export default Entry;