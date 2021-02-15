import React from "react";
import "../HomePage.css"

const SideBar = () => {
    return (
      <div className="side-bar__container">
        <button>Time-Line</button>
        <button>Add A Journal</button>
        <button>Edit Journal</button>
        <button>Delete Journal</button>
        <button>Log Out</button>
      </div>
    );
}

export default SideBar;