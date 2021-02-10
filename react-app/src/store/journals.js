// actions
const ALL_JOURNALS = "userJournals/ALL"
// action creators
const getAllUserJournals = (journals) => ({
    type: ALL_JOURNALS,
    payload: journals
})

// thunks
export const getJournals = (id) => async dispatch => {
    const res = await fetch(`/api/journal/${id}`);
    const data = await res.json();

    if(!data.errors) {
        dispatch(getAllUserJournals(data));
    }
    return data
}
// reducer
const initialState = {}

const journalReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case ALL_JOURNALS:
            newState = Object.assign({}, state, action.payload)
            return newState;
        default:
            return state;
    }
}
// export
export default journalReducer;