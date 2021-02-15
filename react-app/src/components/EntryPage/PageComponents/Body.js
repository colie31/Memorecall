import React from "react";
import ContentEditable from "react-contenteditable";

const Body = ({ editable, body }) => {

    const handleChange = (e) => {
        body.current = e.target.value
    }

    return (
        <ContentEditable 
        html={body.current}
        onChange={handleChange}
        disabled={!editable}
        />
    )
}

export default Body;