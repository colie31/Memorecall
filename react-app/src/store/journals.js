
// actions
const ALL_JOURNALS = "userJournals/ALL"
const ADD_A_JOURNAL = "addAJournalToJournals/ONE"
const UPDATE_A_JOURNAL = "updateSingleJournal/ONE"
const SET_JOURNAL = "setSelectedJournal/ONE"
const DELETE_JOURNAL = "deleteSingleJournal/ONE"
const RESET_JOURNAL = "resetingSingleJournal/ONE"
// action creators
const addAllUserJournals = (journals) => ({
    type: ALL_JOURNALS,
    payload: journals
})

const journalAdd = (journal) => ({
    type: ADD_A_JOURNAL,
    payload: journal
})

const journalUpdate = (journal) => ({
    type: UPDATE_A_JOURNAL,
    payload: journal
})

const journalDelete = (id) => ({
    type: DELETE_JOURNAL,
    payload: id
})

export const setJournal = (id) => ({
    type: SET_JOURNAL,
    payload: id
})

export const reSetJournal = () => ({
    type: RESET_JOURNAL,
    payload: null
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
        dispatch(journalAdd(data));
    }
    return data
}

export const updateJournal = (oldJournalId, updatedJournal) => async dispatch => {
    const res = await fetch(`api/journal/${oldJournalId}/update`, {
        method: "PUT",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(updatedJournal)
    });
    const data = await res.json();
    if (!data.errors) {
      dispatch(journalUpdate(data));
    }
    return data;
}

export const deleteJournal = (id) => async dispatch => {
    console.log(id)
    await fetch(`api/journal/${id}/delete`, {
        method: "DELETE"
    })
    console.log("BackendHit")
    dispatch(journalDelete(id))
}

// reducer
const initialState = { journals: null, journal: null }

const journalReducer = (state = initialState, action) => {
    let newState;
    let index;
    switch(action.type) {
        case ALL_JOURNALS:
            newState = Object.assign({}, state, action.payload)
            return newState;
        case ADD_A_JOURNAL:
            newState = Object.assign({}, state)
            newState.journals = [...newState.journals, action.payload]
            return newState;
        case UPDATE_A_JOURNAL:
            newState = Object.assign({}, state)
            index = newState.journals.findIndex(anJournal => {
                return anJournal.id === action.payload.id
            })
            newState.journals = [...newState.journals.slice(0,index), action.payload, ...newState.journals.slice(index + 1)];
            return newState
        case SET_JOURNAL:
            newState = Object.assign({}, state);
            const journal = newState.journals.filter(entry => {
                return entry.id === action.payload
            })
            newState.journal = journal[0]
            return newState;
        case DELETE_JOURNAL:
            newState = Object.assign({}, state);
            index = newState.journals.findIndex((anJournal) => {
              return anJournal.id === action.payload
            });
            newState.journals = [
              ...newState.journals.slice(0, index),
              ...newState.journals.slice(index + 1)
            ];
            newState.journal = null;
            return newState;
        case RESET_JOURNAL:
            newState = Object.assign({}, state)
            newState.journal = action.payload
            return newState
        default:
            return state;
    }
}
// export
export default journalReducer;