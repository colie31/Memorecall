import React from "react";
import ContentEditable from "react-contenteditable";
import "../EntryPage.css"

const Image = ({ editable, imageRef, imageClass }) => {

  const handleChange = (e) => {
    imageRef.current = e.target.value;
  };

  let content;
  if(editable) {
      content = (
        <ContentEditable
          html={imageRef.current}
          className="entry-image"
          onChange={handleChange}
          disabled={!editable}
          className="editable"
        />
      );
  } else {
      content = <img className={imageClass} src={imageRef.current} alt=""></img>
  }

  return (
    <>
    {content}
    </>
    )
};

export default Image;
