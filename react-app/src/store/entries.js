//actions
const ALL_ENTRIES = "allEntriesForAJournal/ALL"

//action creators
export const storeAllEntries = (entries) => ({
    type: ALL_ENTRIES,
    payload: entries
});

//thunks
export const getAllJournalEntries = (journal_id) => async dispatch => {
    const res = await fetch(`/api/entries/${journal_id}`);
    const data = await res.json();
    dispatch(storeAllEntries(data))
    return data
};

//reducer
const initialState = {entries: []}

const entryReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case ALL_ENTRIES:
            newState = Object.assign({}, state, { "entries": action.payload })
            return newState;
        default:
            return state;
    }
}

//export
export default entryReducer;
