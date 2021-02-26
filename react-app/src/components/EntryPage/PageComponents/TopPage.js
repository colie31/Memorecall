import React, { useState }  from "react";
import moment from "moment";
import DropDown from "./DropDown"

const TopPage = ({ entry, editable, categories, category, setCategory }) => {
    if(entry) setCategory(entry.category_id)

    // console.log(category)
    let display;
    if(editable) {
        display = <DropDown 
        category={category}
        setCategory={category => setCategory(category)}
        categories={categories}
        />
    } else {
        display = <p>{entry.category}</p>
    }

    return (
      <div className="entry-date">
        {entry && <p>{moment.parseZone(entry.date).format("LL")}</p>}
        {display}
      </div>
    );
}

export default TopPage;