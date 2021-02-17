import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import SideBar from "./Children/SideBar"
import BookCase from "./Children/BookCase"
import "./HomePage.css"



const HomePage = () => {
    const [theJournal, setTheJournal] = useState(null)


    return (
      <div className="home-page__body">
        <div id="home-page__sidebar">
            <SideBar 
            theJournal={theJournal} />
        </div>
        <div id="home-page__bookcase">
            <BookCase 
            setTheJournal={setTheJournal} />
        </div>
      </div>
    );
}

export default HomePage;