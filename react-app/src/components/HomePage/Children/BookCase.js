import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJournals, setJournal } from "../../../store/journals";
import Journal from "../../../pics/Journal"


const BookCase= () => {
  

  const dispatch = useDispatch();
  const journals = useSelector((state) => state.journals.journals);
  const user = useSelector((state) => state.session.user);

  
   useEffect(() => {
     dispatch(getJournals(user.id));
     console.log('this useEffect')
   }, [dispatch]);

  return (
      <div className="showcase-bookcase__container">
        <div className="showcase-bookcase__display">
          {journals && journals.map(journal => {
            return (
              <div data-descr={journal.name} className="bounce-7">
                <Journal
                  key={journal.id}
                  journal={journal}
                  dispatch={dispatch}
                  func={setJournal}
                />
              </div>
            );
            })}
        </div>
      </div>
  )
};

export default BookCase;






// {journals && journals.map(journal => {
//             return (
//               <div
//                 key={journal.id}
//                 className="journal"
//                 style={{ background: journal.color }}
//                 onClick={() => dispatch(setJournal(journal.id))}
//               >
//               {journal.name}
//               </div>
//             );
//             })}