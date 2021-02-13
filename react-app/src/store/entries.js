//actions
const ALL_ENTRIES = "allEntriesForAJournal/ALL"
const CURRENT_ENTRY = "currentlySelectedEntry/ONE"
const DELETE_CURRENT_ENTRY = "currentlySelectedEntryDeleted/ONE"
//action creators
export const storeAllEntries = (entries) => ({
    type: ALL_ENTRIES,
    payload: entries
});

export const storeCurrentEntry = (entry) => ({
    type: CURRENT_ENTRY,
    payload: entry
})

export const deleteCurrentEntry = (id) => ({
    type: DELETE_CURRENT_ENTRY,
    payload: id
})

//thunks
export const getAllJournalEntries = (journal_id) => async dispatch => {
    const res = await fetch(`/api/entries/${journal_id}`);
    const data = await res.json();
    dispatch(storeAllEntries(data.entries))
    
    return data
};

export const deleteAnEntry = (id) => async dispatch => {
    const res = await fetch(`/api/entries/delete/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    const data = await res.json();
    dispatch(deleteCurrentEntry(id))
    console.log(data)
    return data
}

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
        case DELETE_CURRENT_ENTRY:
            newState = Object.assign({}, state)
            newState.entries = newState.entries.filter(entry => {
               return entry.id !== action.payload
            });
            return newState;
        default:
            return state;
    }
}

//export
export default entryReducer;
