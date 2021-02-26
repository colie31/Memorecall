import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import SideBar from "./Children/SideBar"
import BookCase from "./Children/BookCase"
import Plant from "./Children/Plant"
import "./HomePage.css"



const HomePage = () => {
    const theJournal = useSelector(state => state.journals.journal);
    const user = useSelector(state => state.session.user);

    return (
      <div className="home-page__body">
        <div id="home-page__sidebar">
            <SideBar 
            theJournal={theJournal}
            user={user} />
        </div>
        <div id="home-page__showcase">
            <BookCase />
            <Plant />
        </div>
      </div>
    );
}

export default HomePage;