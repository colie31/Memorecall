// actions
const ALL_JOURNALS = "userJournals/ALL"
const ONE_JOURNAL = "singleUserJournal/ONE"
// action creators
const getAllUserJournals = (journals) => ({
    type: ALL_JOURNALS,
    payload: journals
})

// thunks
export const getJournals = () => async dispatch => {
    console.log("hello from getjournals")
    const res = await fetch("/api/journal");
    console.log("res", res)
    const data = await res.json();
    console.log("DATA", data)

    // if(!data.errors) {
    //     dispatch(getAllUserJournals(data));
    // }
    // return data
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