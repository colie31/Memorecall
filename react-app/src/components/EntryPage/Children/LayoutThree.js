import React from "react";
import Body from "../PageComponents/Body"

const LayoutThree = ({
    body, 
    editable,
    entry
}) => {

    body.current = entry.body;

    return (
        <>
        <Body
        editable={editable}
        body={body} />
        </>
    )
};

export default LayoutThree;