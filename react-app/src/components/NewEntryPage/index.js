import React, {useEffect, useState, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import layoutOne from "../../layout_pics/page_layout_one.svg"
import layoutTwo from "../../layout_pics/page_layout_two.svg";
import layoutThree from "../../layout_pics/page_layout_three.svg";
import "./NewEntryPage.css";

import EntryBar from "../EntryPage/Children/EntryBar"
import NewEntry from "./NewEntry"
import { getAllJournalEntries, getCategories } from "../../store/entries"

const NewEntryPage = () => {
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const editable = true;
    const [ imageOne, setImageOne] = useState("")
    const [ pageLayout, setPageLayout ] = useState(1)
    const [ category, setCategory ] = useState("")
    const newBody = useRef("");

    const entries = useSelector((state) => state.entries.entries);
    const categories = useSelector((state) => state.entries.categories);

    useEffect(() => {
      (async () => {
        await dispatch(getAllJournalEntries(id));
        await dispatch(getCategories());
      })();
    }, [dispatch]);


    return (
      <div className="entry-page__container">
        <div className="journal-bar__container">
          <EntryBar
            entries={entries}
            editable={editable}
            body={newBody}
            imageOne={imageOne}
            category={category}
          />
        </div>
        <div className="entry-body__container">
          {entries && (
            <>
              <NewEntry
                pageLayout={pageLayout}
                setPageLayout={setPageLayout}
                editable={editable}
                body={newBody}
                imageOne={imageOne}
                setImageOne={setImageOne}
                categories={categories}
                category={category}
                setCategory={setCategory}
              />
            </>
          )}
        </div>
      </div>
    );
}

export default NewEntryPage;