import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import SideBar from "./Children/SideBar"
import BookCase from "./Children/BookCase"
import "./HomePage.css"

import { getJournals } from "../../store/journals"


const HomePage = () => {
    const dispatch = useDispatch();
    const journals = useSelector(state => state.journals.journals)
    const user = useSelector(state => state.session.user)

    useEffect(()=> {
        dispatch(getJournals(user.id))
    },[dispatch])

    return (
      <div className="home-page__body">
        <div id="home-page__sidebar">
            <SideBar />
        </div>
        <div id="home-page__bookcase">
            <BookCase journals={journals} />
        </div>
      </div>
    );
}

export default HomePage;