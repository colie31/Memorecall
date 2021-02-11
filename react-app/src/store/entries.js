//actions
const ALL_ENTRIES = "allEntriesForAJournal/ALL"
const CURRENT_ENTRY = "currentlySelectedEntry/ONE"
//action creators
export const storeAllEntries = (entries) => ({
    type: ALL_ENTRIES,
    payload: entries
});

export const storeCurrentEntry = (entry) => ({
    type: CURRENT_ENTRY,
    payload: entry
})

//thunks
export const getAllJournalEntries = (journal_id) => async dispatch => {
    const res = await fetch(`/api/entries/${journal_id}`);
    const data = await res.json();
    // const currentEntry = data.entries[0]
    dispatch(storeAllEntries(data.entries))
    // dispatch(storeCurrentEntry(currentEntry))
    
    return data
};

//reducer
const initialState = { "entries": null, "entry": null }

const entryReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case ALL_ENTRIES:
            newState = Object.assign({}, state, { "entries": action.payload })
            return newState;
        case CURRENT_ENTRY:
            newState = Object.assign({}, state, { "entry": action.payload })
            return newState;
        default:
            return state;
    }
}

//export
export default entryReducer;
