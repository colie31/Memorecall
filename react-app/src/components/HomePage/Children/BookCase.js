import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJournals, setJournal } from "../../../store/journals";


const BookCase= () => {
  

  const dispatch = useDispatch();
  const journals = useSelector((state) => state.journals.journals);
  const user = useSelector((state) => state.session.user);

  
   useEffect(() => {
     dispatch(getJournals(user.id));
   }, [dispatch]);

  return (
      <div className="showcase-bookcase__container">
        <div className="showcase-bookcase__display">
          {journals && journals.map(journal => {
            return (
              <div
                key={journal.id}
                className="journal"
                style={{ background: journal.color }}
                onClick={() => dispatch(setJournal(journal.id))}
              >
              {journal.name}
              </div>
            );
            })}
        </div>
      </div>
  )
};

export default BookCase;
