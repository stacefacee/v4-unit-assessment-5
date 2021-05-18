const initialState = {
  username: '',
  profile_pic: ''
};

const SAVE_USER= "store user info when user logs in or registers";
const LOGOUT_USER= "end user session"


export function updateUser(user){
  return {
    type: SAVE_USER,
    payload: user
  }
};

export function logout(){
  return {
    type: LOGOUT_USER,
    payload: null
  }
};

export function reducer(state = initialState, action){
  switch(action.type){
    case SAVE_USER:
      return {...state, username: action.payload.username, profile_pic: action.payload.profile_pic}
    
    case LOGOUT_USER:
      return {...state, username: '', profile_pic: ''}
    default:
      return {...state}
  }
};

export default reducer;
