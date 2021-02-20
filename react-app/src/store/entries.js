//actions
const ALL_ENTRIES = "allEntriesForAJournal/ENTRIES"
const CURRENT_ENTRY = "currentlySelectedEntry/ENTRY"
const DELETE_CURRENT_ENTRY = "currentlySelectedEntryDeleted/ENTRY"
const PAGETURN_LEFT = "subtractFromIndex/INDEX"
const PAGETURN_RIGHT = "addToIndex/INDEX"
const SET_CURRENT_INDEX = "setEntryIndex/INDEX"
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

export const leftEntry = () => ({
    type: PAGETURN_LEFT,
})

export const rightEntry = () => ({
    type: PAGETURN_RIGHT
})

export const setIndex = (index) => ({
    type: SET_CURRENT_INDEX,
    payload: index
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
const initialState = { "entries": null, "entry": null, "index": 0 }

const entryReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case ALL_ENTRIES:
        newState = Object.assign({}, state, { entries: action.payload });
        newState.entry = newState.entries[newState.index];
        return newState;
      case CURRENT_ENTRY:
        newState = Object.assign({}, state, { entry: action.payload });
        return newState;
      case DELETE_CURRENT_ENTRY:
        newState = Object.assign({}, state);
        newState.entries = newState.entries.filter((entry) => {
          return entry.id !== action.payload;
        });
        return newState;
      case PAGETURN_LEFT:
        newState = Object.assign({}, state);
        if (newState.index > 0) newState.index --;
        newState.entry = newState.entries[newState.index]
        return newState;
      case PAGETURN_RIGHT:
        newState = Object.assign({}, state);
        if (newState.index < newState.entries.length - 1) newState.index ++;
        newState.entry = newState.entries[newState.index];
        return newState;
      case SET_CURRENT_INDEX:
          newState = Object.assign({}, state);
          newState.index = action.payload
          newState.entry = newState.entries[newState.index]
          return newState;
      default:
        return state;
    }
}

//export
export default entryReducer;
