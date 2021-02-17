import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import SideBar from "./Children/SideBar"
import BookCase from "./Children/BookCase"
import "./HomePage.css"

// import { getJournals } from "../../store/journals"


const HomePage = () => {
    // const dispatch = useDispatch();
    // const journals = useSelector(state => state.journals.journals)
    // const user = useSelector(state => state.session.user)
    const [journalId, setJournalId] = useState(null)

    // useEffect(()=> {
    //     dispatch(getJournals(user.id))
    // },[dispatch])

    return (
      <div className="home-page__body">
        <div id="home-page__sidebar">
            <SideBar 
            journalId={journalId} />
        </div>
        <div id="home-page__bookcase">
            <BookCase 
            setJournalId={setJournalId} />
        </div>
      </div>
    );
}

export default HomePage;