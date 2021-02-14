import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeCurrentEntry } from "../../../store/entries";
import moment from "moment";

const Entry = ({ setSelectedDay, index, entries }) => {
    const dispatch = useDispatch();
    const entry = useSelector(state => state.entries.entry)
   
    useEffect(() => {
        dispatch(storeCurrentEntry(entries[index]))
        setSelectedDay(null)
    },[dispatch, index, entries])
    
    let page;
    
    return (
      <div className="entry-body__page">
        {entry && (
          <div>
            <p>{moment.parseZone(entry.date).format("LL")}</p>
            <p>{entry.date}</p>
          </div>
        )}
      </div>
    );
}

export default Entry;