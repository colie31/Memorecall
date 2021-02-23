import React from "react";
import Body from "../PageComponents/Body"

const LayoutOne = ({ 
    body, 
    editable, 
    entry
}) => {

    body.current = entry.body;
    const classNick = "layout-one"

    return (
        <Body 
        editable={editable}
        body={body}
        classNick={classNick}
     />
    )
}

export default LayoutOne;