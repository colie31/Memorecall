import React, { useState } from "react";
import ContentEditable from "react-contenteditable";
import "../EntryPage.css"
import UploadButton from "../PageComponents/UploadButton"

const Image = ({ editable, imageRef, imageClass }) => {
  const [image, setImage] = useState(imageRef.current)
  // const handleChange = (e) => {
  //   imageRef.current = e.target.value;
  // };
  console.log("image", imageRef.current)

 

  return (
    <div className={`entry-image__${imageClass}`}>
      <img className={imageClass} src={image} alt=""></img>
      {editable && <UploadButton singleImage={imageClass} imageRef={imageRef} image={image} setImage={setImage} />}
    </div>
  );
};

export default Image;
