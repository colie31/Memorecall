import React from "react";
import Body from "../PageComponents/Body";
import Image from "../PageComponents/Image"

const LayoutTwo = ({ 
    entry, 
    body, 
    editable, 
    imageOne 
}) => {

  body.current = entry.body;
  const imageClass = "single-image";
  const classNick = "layout-two"
  imageOne.current = entry.images[0].url

  return (
    <>
      <Image editable={editable} imageRef={imageOne} imageClass={imageClass} />
      <Body editable={editable} body={body} classNick={classNick} />
    </>
  );
};

export default LayoutTwo;
