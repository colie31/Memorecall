const SET_USER = "session/SETUSER";
const REMOVE_USER = "session/REMOVEUSER";

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

export const authenticate = async() => {
  const response = await fetch('/api/auth/',{
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}

export const login = (email, password) => async dispatch => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  let data;
  if(response.ok) {
    data = await response.json();
    dispatch(setUser(data))
  }
  console.log("DATA", data)
  return data;
}

export const logout = async () => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    }
  });
  return await response.json();
};


export const signUp = async (username, email, password) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  return await response.json();
}

const initialState = { user: null}

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch(action.type) {
    case SET_USER:
      newState = Object.assign({}, state, { user: action.payload });
      return newState;
    default:
      return state;
  }
}

export default sessionReducer;