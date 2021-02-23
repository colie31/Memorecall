import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import SideBar from "./Children/SideBar"
import BookCase from "./Children/BookCase"
import Plant from "./Children/Plant"
import "./HomePage.css"



const HomePage = () => {
    const theJournal = useSelector(state => state.journals.journal);

    return (
      <div className="home-page__body">
        <div id="home-page__sidebar">
            <SideBar 
            theJournal={theJournal} />
        </div>
        <div id="home-page__showcase">
            <BookCase />
            <Plant />
        </div>
      </div>
    );
}

export default HomePage;