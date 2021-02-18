
// actions
const ALL_JOURNALS = "userJournals/ALL"
const ADD_A_JOURNAL = "addAJournalToJournals/ALL"
// action creators
const addAllUserJournals = (journals) => ({
    type: ALL_JOURNALS,
    payload: journals
})

const addJournal = (journal) => ({
    type: ADD_A_JOURNAL,
    payload: journal
})

// thunks
export const getJournals = (id) => async dispatch => {
    const res = await fetch(`/api/journal/${id}`);
    const data = await res.json();

    if(!data.errors) {
        dispatch(addAllUserJournals(data));
    }
    return data
}

export const createJournal = (newJournal) => async dispatch => {
    console.log("new journal", newJournal)
    const res = await fetch("/api/journal/create", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(newJournal)
    });
    const data = await res.json();
    if(!data.errors) {
        console.log("data", data)
        dispatch(addJournal(data));
    }
    return data
}

export const updateJournal = (oldJournalId, updatedJournal) => async dispatch => {
    console.log("updated journal", updatedJournal)
    const res = await fetch(`api/journal/${oldJournalId}/update`, {
        method: "PUT",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(updatedJournal)
    });
    const data = await res.json();
    if (!data.errors) {
      dispatch(getJournals(data.user));
    }
    return data;
}

const initialState = {}

const journalReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case ALL_JOURNALS:
            newState = Object.assign({}, state, action.payload)
            return newState;
        case ADD_A_JOURNAL:
            newState = Object.assign({}, state)
            newState.journals = action.payload
            return newState;
        default:
            return state;
    }
}
// export
export default journalReducer;