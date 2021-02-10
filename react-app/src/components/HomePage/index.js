import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import SideBar from "./Children/SideBar"
import BookCase from "./Children/BookCase"
import "./HomePage.css"

import { getJournals } from "../../store/journals"


const HomePage = () => {
    const dispatch = useDispatch();
    const journals = useSelector(state => state.journals)

    useEffect(()=> {
        dispatch(getJournals())
    },[dispatch])

    // if(journals.errors) {
    //     return null
    // }

    return (
      <div className="home-page__body">
        <div id="home-page__sidebar">
            <SideBar />
        </div>
        <div id="home-page__bookcase">
            <BookCase />
        </div>
      </div>
    );
}

export default HomePage;