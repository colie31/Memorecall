import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import layoutOne from "../../layout_pics/page_layout_one.svg"
import layoutTwo from "../../layout_pics/page_layout_two.svg";
import layoutThree from "../../layout_pics/page_layout_three.svg";
import "./NewEntryPage.css";

const NewEntryPage = () => {
    const history = useHistory();

    return (
        <div className="images">
            <h1>Select a page layout</h1>
            <div className="image-selection">
                <div>
                    <img 
                    className="image-selection__page"
                    src={layoutOne}
                    ></img>
                </div>
                <div>
                    <img 
                    className="image-selection__page"
                    src={layoutTwo}></img>
                </div>
                <div>
                    <img 
                    className="image-selection__page"
                    src={layoutThree}></img>
                </div>
            </div>
        </div>
    );
}

export default NewEntryPage;