import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LayoutOne from "./LayoutOne";
import LayoutTwo from "./LayoutTwo";
import LayoutThree from "./LayoutThree";
import AddEntryModal from "./AddEntryModal"
import { Modal } from "../../../context/Modal"
import TopPage from "../PageComponents/TopPage";
// import { setJournal } from "../../../store/journals"
import { setIndex } from "../../../store/entries";

const Entry = ({ 
    body, 
    imageOne,
    setImageOne,
    editable,
    categories,
    category,
    setCategory,  
    entries 
  }) => {
    const dispatch = useDispatch();
    const entry = useSelector((state) => state.entries.entry);

    let page;
    if(entry && entry.page_layout === 1) {
        page = <LayoutOne editable={editable} body={body} entry={entry}/>
    } else if (entry && entry.page_layout === 2) {
        body.current = entry.body;
        page = (
          <LayoutTwo
            editable={editable}
            body={body}
            entry={entry}
            imageOne={imageOne}
            setImageOne={(image) => setImageOne(image)}
          />
        );
    }

    useEffect(() => {
      dispatch(setIndex(entries.length-1))
    }, [])
    
    
    
    return (
      <div className="entry-body__page">
        {entry && (
          <>
            <TopPage 
            entry={entry} 
            editable={editable}
            categories={categories}
            category={category} 
            setCategory={setCategory} />
            {page}
          </>
        )}
        {!entry && (
          <Modal>
            <AddEntryModal />
          </Modal>
        )}
      </div>
    );
}

export default Entry;