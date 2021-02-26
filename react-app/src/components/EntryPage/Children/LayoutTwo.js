import React from "react";
import Body from "../PageComponents/Body";
import Image from "../PageComponents/Image"

const LayoutTwo = ({ 
    entry, 
    body, 
    editable, 
    imageOne,
    setImageOne
}) => {

  if(entry) {
   body.current = entry.body;
   setImageOne(entry.images[0].url);
  }
  const imageClass = "single-image";
  const classNick = "layout-two"

  return (
    <>
      <Image editable={editable} imageOne={imageOne} setImageOne={setImageOne} imageClass={imageClass} />
      <Body editable={editable} body={body} classNick={classNick} />
    </>
  );
};

export default LayoutTwo;
