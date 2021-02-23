import React, { useState }  from "react";
import moment from "moment";
import DropDown from "./DropDown"

const TopPage = ({ entry, editable, categories }) => {
    const [category, setCategory] = useState(entry.category);
    let display;
    if(editable) {
        display = <DropDown 
        category={category}
        setCategory={setCategory}
        categories={categories}
        />
    } else {
        display = <p>{entry.category}</p>
    }

    return (
      <div className="entry-date">
        <p>{moment.parseZone(entry.date).format("LL")}</p>
        {display}
      </div>
    );
}

export default TopPage;