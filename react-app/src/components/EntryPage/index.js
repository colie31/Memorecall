import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getAllJournalEntries } from "../../store/entries";

const EntryPage = () => {
    const { id } = useParams();
    const entries = useSelector(state => state.entries.entries)
    console.log(id);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllJournalEntries(id))
    }, [dispatch])


    return (
        <h1>Entry Page {id}</h1>
    )
}

export default EntryPage