import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeCurrentEntry } from "../../../store/entries";
import LayoutOne from "./LayoutOne";
import LayoutTwo from "./LayoutTwo";
import LayoutThree from "./LayoutThree";
import moment from "moment";

const Entry = ({ 
    body, 
    imageOne,
    imageTwo,
    editable, 
    setSelectedDay, 
    index, 
    entries }) => {

    const dispatch = useDispatch();
    const entry = useSelector(state => state.entries.entry)

    useEffect(() => {
        dispatch(storeCurrentEntry(entries[index]))
        setSelectedDay(null)
    },[dispatch, index, entries])
    

    let page;
    if(entry && entry.page_layout === 1) {
        page = <LayoutOne editable={editable} body={body} entry={entry}/>
    } else if (entry && entry.page_layout === 2) {
        body.current = entry.body;
        page = <LayoutTwo editable={editable} body={body} entry={entry} imageOne={imageOne}/>;
    } else if (entry && entry.page_layout === 3) {
        body.current = entry.body;
        page = <LayoutThree editable={editable} body={body} entry={entry} imageOne={imageOne} imageTwo={imageTwo}/>;
    }
    
    return (
      <div className="entry-body__page">
        {entry && (
          <>
          <div>
            <p>{moment.parseZone(entry.date).format("LL")}</p>
            <p>{entry.category}</p>
          </div>
          <div className="entry-body__content">
            {page}
          </div>
          </>
        )}
      </div>
    );
}

export default Entry;