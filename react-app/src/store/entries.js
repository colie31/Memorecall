//actions
const ONE_JOURNAL = "singleUserJournal/ONE";
const ALL_ENTRIES = "allEntriesForAJournal/ALL"

//action creators
export const storeOneJournal = (journal) => ({
    type: ONE_JOURNAL,
    payload: journal
});

export const storeAllEntries = (entries) => ({
    type: ALL_ENTRIES,
    payload: entries
});

//thunks
export const getAllJournalEntries = (journal_id) => async dispatch => {
    const res = await fetch(`/api/entries/${journal_id}`);
    const data = await res.json();
    console.log(data);
    return data
};

//reducer
const initialState = { journal: {}, entries: []}

const entryReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case ONE_JOURNAL:
            newState = Object.assign({}, state, { "journal": action.payload })
            return newState;
        default:
            return state;
    }
}

//export
export default entryReducer;
