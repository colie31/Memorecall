import React from "react";
import ContentEditable from "react-contenteditable";

const Body = ({ editable, body, classNick }) => {

    const handleChange = (e) => {
        body.current = e.target.value
    }

    return (
    <div className={`entry-body__${classNick}`}>
        <ContentEditable 
        html={body.current}
        onChange={handleChange}
        disabled={!editable}
        />
    </div>
    )
}

export default Body;