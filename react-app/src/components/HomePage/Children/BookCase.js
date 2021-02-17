import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJournals } from "../../../store/journals";


const BookCase= ({ setTheJournal }) => {
  

  const dispatch = useDispatch();
  const journals = useSelector((state) => state.journals.journals);
  const user = useSelector((state) => state.session.user);
  
   useEffect(() => {
     dispatch(getJournals(user.id));
   }, []);

  return (
      <>
      {journals && journals.map(journal => {
        return (
          <div
            key={journal.id}
            className="journal"
            style={{ background: journal.color }}
          >
            <div 
            onClick={() => setTheJournal({ 
              name:journal.name, 
              id:journal.id, 
              color:journal.color})}
            >{journal.name}</div>
          </div>
        );
        })}
      </>
  )
};

export default BookCase;
